import * as PIXI from 'pixi.js';
import { getGameState, registerDisplayAndState, unregisterDisplayAndState } from '../../../../pixiloop';
import Textures from '../../textures';

const NAMESPACE = 'boss';

class Boss extends PIXI.Container {

    constructor(){
        super();
        registerDisplayAndState(NAMESPACE, this);
    }
    
    destroy(options){
        unregisterDisplayAndState(NAMESPACE);
        super.destroy(options);
    }

    setup(state){
        this.state = state;
        this.x = state.x;
        this.y = state.y;
        this.width = state.width;
        this.height = state.height;
        this.setupSkin();
    }

    setupSkin() {
        console.log("Setupskin()");
        this.skin = new PIXI.Sprite(Textures.BOSS)
        this.skin.x = 0;
        this.skin.y = 0;
        this.skin.width = this.state.width;
        this.skin.height = this.state.height;
        this.addChild(this.skin);
    }

    update({state}) {
        this.state = state;
        this.x = state.x;
        this.y = state.y;
    }


}

export default Boss;