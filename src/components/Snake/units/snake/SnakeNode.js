import * as PIXI from 'pixi.js';
import  Textures from '../../textures';

class SnakeNode extends PIXI.Sprite {
    constructor(){
        super(Textures.SNAKE_NODE);
    }
}

export default SnakeNode;