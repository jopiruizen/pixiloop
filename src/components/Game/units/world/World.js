import * as PIXI from 'pixi.js';
import { registerDisplayAndState, unregisterDisplayAndState } from '../../../../pixiloop';

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

    }

}

export default new World();