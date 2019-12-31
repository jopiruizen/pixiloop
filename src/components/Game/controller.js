import  * as PIXI from 'pixi.js';
import pixiloop from '../../pixiloop/';

import * as models from './models';
import World from './units/world/';
import Textures from './textures';
import RoadBlock  from './units/world/RoadBlock';
class GameController {
    init(container) {
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
        
    }

    initDisplays(){
        this.world = new World();
        this.world.x = (800 - 600)/2;
        this.world.y = 0;
        pixiloop.app.stage.addChild( this.world);
    }   
}

export default new GameController();