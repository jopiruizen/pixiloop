import  * as PIXI from 'pixi.js';
import pixiloop, { changeMode, useDispatch } from '../../pixiloop/';

import models from './models';
import Platform from './units/platform';
import Hero from './units/hero';
import Textures from './textures';
import RoadBlock  from './units/platform/RoadBlock';


import { Modes, KeyCodesDirections } from './constants';

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
    }

    handleKeyDown(event) {
        const direction = KeyCodesDirections[event.keyCode.toString()];
    }

    initDisplays(){
        console.log("INIT not Display...");
    }   
}

export default new GameController();