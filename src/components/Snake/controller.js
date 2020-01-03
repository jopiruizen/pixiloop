import  * as PIXI from 'pixi.js';
import pixiloop, { changeMode, useDispatch } from '../../pixiloop/';

import models from './models';
import World from './units/world/';
import Snake from './units/snake/';
import Textures from './textures';
import RoadBlock  from './units/world/RoadBlock';


import { Modes, Directions } from './constants';

const keyCodesDirections = {
    "87": Directions.UP,
    "65": Directions.LEFT,
    "83": Directions.DOWN,
    "68": Directions.RIGHT,
    "38": Directions.UP,
    "37": Directions.LEFT,
    "40": Directions.DOWN,
    "39": Directions.RIGHT,
}

class GameController {

    init(container) {
        console.log("MOdels");
        console.log(models);
        pixiloop.init({
            pixiSettings:  {
                width: 800,
                height: 600,
                backgroundColor: 0xFF9900,
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
        const direction = keyCodesDirections[event.keyCode.toString()];
        const { snake: { changeDirection } } = useDispatch();
        changeDirection({newDirection: direction});
    }

    initDisplays(){

        this.world = new World();
        this.world.x = (800 - 600)/2;
        this.world.y = 0;
        pixiloop.app.stage.addChild( this.world);

        this.snake = new Snake();
        this.snake.x = 0;
        this.snake.y = 0;
        this.world.addChild(this.snake);
        
    }   
}

export default new GameController();