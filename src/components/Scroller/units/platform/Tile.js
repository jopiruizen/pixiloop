import * as PIXI from 'pixi.js';
import {toTexture}  from '../../textures';

class Tile extends PIXI.Sprite {
    constructor(tileData){
        super(toTexture(tileData.texture));
        this.data = tileData;
        this.x = tileData.x;
        this.y = tileData.y;
        this.visible = tileData.visible;
    }
    destroy(options) {
        super.destroy(options);
        this.data = null;
    }
}
export default Tile;