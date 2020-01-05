import * as PIXI from 'pixi.js';
import { registerDisplayAndState, unregisterDisplayAndState, useDispatch } from '../../../../pixiloop';
import Tile from './Tile';
import Textures from '../../textures';

const WORLD_NAMESPACE = 'platform';
class Platform extends PIXI.Container {
    constructor() {
        super();
        registerDisplayAndState(WORLD_NAMESPACE, this );
    }
    
    destroy(options){
        unregisterDisplayAndState(WORLD_NAMESPACE);
        super.destroy(options);
    }

    update({ state }) {
        this.state = state;
        if (!state.fullStepComplete) {
            this.renderScroll();
        } else {
            this.renderVisibleArea();
        }
       
    }

    renderScroll(){
        const  {
            stage,
            stageVisibility: visibility,
            renderedOffset,
        } = this.state;
    
        let maxVisibleX = visibility.startX + visibility.width + renderedOffset;
        if (maxVisibleX >= stage[0].length-1) maxVisibleX = stage[0].length - 1;
        let minVisibleX = visibility.startX - renderedOffset; 
        if (minVisibleX <= 0) minVisibleX = 0;
        for (let i = 0; i < stage.length; i++) {
            for (let j = minVisibleX;  j <= maxVisibleX; j++) {
                const data = stage[i][j];
                const tile = this.tiles[i][j];
                tile.x = data.x;
                tile.y = data.y;
            }
        }
    }

    renderVisibleArea(){
        const { stage } = this.state;
        for( let i = 0; i < stage.length; i++ ) {
            for( let j = 0; j < stage[i].length; j++ ) {
                const data = stage[i][j];
                let tile = this.tiles[i][j];
                tile.visible = data.visible;
                tile.x = data.x;
                tile.y = data.y;
            } 
        }
    }

    setup(state) {
        this.state = state;
        this.tiles = [];    
        this.setupTileMatrix();
    }

    setupTileMatrix(){
        let stage = this.state.stage;
        for( let i = 0; i < stage.length; i++ ) {
            this.tiles[i] = [];
            for( let j = 0; j < stage[i].length; j++ ) {
                const tileData = stage[i][j];
                let tile = new Tile(tileData);
                this.tiles[i][j] = tile;
                this.addChild(tile);
            } 
        }
    }

    renderMap(map) {
        for ( let i = 0; i < map.length; i++ ) {
            for (let j = 0; j < map[i].length; j++) {
                
            }
        }
       
    }

     
}

export default Platform;