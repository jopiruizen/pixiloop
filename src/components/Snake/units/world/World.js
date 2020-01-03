import * as PIXI from 'pixi.js';
import { registerDisplayAndState, unregisterDisplayAndState, useDispatch } from '../../../../pixiloop';
import RoadBlock from './RoadBlock';
import Textures from '../../textures';

const WORLD_NAMESPACE = 'world';
class World extends PIXI.Container {
    constructor() {
        super();
        registerDisplayAndState(WORLD_NAMESPACE, this );
    }
    
    destroy(options){
        unregisterDisplayAndState(WORLD_NAMESPACE);
        super.destroy(options);
    }

    update({fullState, state, key}) {
        this.state = state;
        this.showPelette();
    }

    setup(state) {
        this.state = state;
        this.width = 12 * this.state.blockSize;
        this.height = 12 * this.state.blockSize;
        if( state && state.map) {
            this.renderRoadBlocks(state.map);
        }
    }

    renderRoadBlocks(map) {
        this.roadBlocks = new PIXI.Container();
        this.roadBlocks.width = this.width;
        this.roadBlocks.height = this.height;
        for ( let i = 0; i < map.length; i++ ) {
            for (let j = 0; j < map[i].length; j++) {
                let isBlock = map[i][j];
                this.renderBlockOrTitle(j,i, isBlock);
            }
        }
        console.log("ROadBlocks...", this.roadBlocks);
        this.addChildAt(this.roadBlocks,0);
    }

    renderBlockOrTitle(x,y, isBlock){
        let blockSize = 50;
        if(this.state.blockSize) blockSize = this.state.blockSize;
        let block = new PIXI.Sprite(Textures.TILE);
        if( isBlock ) {
            block = new RoadBlock();
        }
        block.width = this.blockSize;
        block.height = this.blockSize;
        block.x = x * blockSize;
        block.y = y * blockSize;
        block.width = blockSize;
        block.height = blockSize;
        this.roadBlocks.addChild(block);
    }
    
    showPelette(){
        if(!this.state.peletteShown) {
            if (!this.pelette) {
                this.pelette = new PIXI.Sprite(Textures.ROADBLOCK);
                this.pelette.width = this.state.blockSize;
                this.pelette.height = this.state.blockSize;
                this.addChildAt(this.pelette,1);
            }
            this.pelette.x = this.state.blockSize * this.state.peletteX;
            this.pelette.y = this.state.blockSize * this.state.peletteY;
            const { world: { peletteIsShown }} = useDispatch();
            peletteIsShown({peletteShown: true});
        }
    }
}

export default World;