import  * as PIXI from 'pixi.js';
import pixiloop, { changeMode, useDispatch } from '../../pixiloop/';

import models from './models';
import Platform from './units/platform';
import Hero from './units/hero';
import Textures from './textures';


import { Modes } from './constants';

class GameController {

    init(container) {
        pixiloop.init({
            pixiSettings:  {
                width: 800,
                height: 600,
                backgroundColor: 0xF1F1F1,
                resolution: 1,
            },
            models,
        });
        container.appendChild(pixiloop.app.view);
        this.initDisplays();
        pixiloop.setupGame();
        changeMode(Modes.PLAY);
        pixiloop.start();
        window.addEventListener('keydown',this.handleKeyDown,false);
        window.addEventListener('keyup',this.handleKeyUp,false);
    }

    handleKeyDown(event) {
        const { platform : { pushKeyPresses } } = useDispatch();
        pushKeyPresses({keyCode: event.keyCode});
    }

    handleKeyUp(event) {
        const { platform : { popKeyPresses } } = useDispatch();
        popKeyPresses({keyCode: event.keyCode});
    }


    initDisplays(){
        this.platform = new Platform();
        pixiloop.app.stage.addChild( this.platform);
    }   
}

export default new GameController();