import * as PIXI from 'pixi.js';
import Textures  from '../../textures';

class RoadBlock extends PIXI.Sprite {
    constructor(){
        super(Textures.ROADBLOCK);
    }
}
export default RoadBlock;