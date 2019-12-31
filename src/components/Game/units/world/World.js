import * as PIXI from 'pixi.js';
import { registerDisplayAndState, unregisterDisplayAndState } from '../../../../pixiloop';
import RoadBlock from './RoadBlock';

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

    update(state){
        this.state = state;
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
                let hasBlock = map[i][j];
                if (hasBlock) this.renderBlock(j,i);
            }
        }
        console.log("ROadBlocks...", this.roadBlocks);
        this.addChild(this.roadBlocks);
    }

    renderBlock(x,y){
       
        let blockSize = 50;
        if(this.state.blockSize) blockSize = this.state.blockSize;
        const block = new RoadBlock();
                
        block.width = this.blockSize;
        block.height = this.blockSize;
        block.x = x * blockSize;
        block.y = y * blockSize;
        block.width = blockSize;
        block.height = blockSize;
        this.roadBlocks.addChild(block);
    }

}

export default World;