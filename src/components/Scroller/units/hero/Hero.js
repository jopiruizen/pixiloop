import * as PIXI from 'pixi.js';
import { registerDisplayAndState, unregisterDisplayAndState } from '../../../../pixiloop';
import Textures from '../../textures';

const HERO_NAMESPACE = 'hero';

class Hero extends PIXI.Container {

    constructor(){
        super();
        registerDisplayAndState(HERO_NAMESPACE, this);
    }
    
    destroy(options){
        unregisterDisplayAndState(HERO_NAMESPACE);
        super.destroy(options);
    }

    setup(state){
        this.state = state;
      
    }

    update({state}) {
        this.state = state;
        
    }


}

export default Hero;