import * as PIXI from 'pixi.js';
import {toTexture}  from '../../textures';

class Tile extends PIXI.Container {
    constructor(tileData){
        super();
        this.sprite = new PIXI.Sprite(toTexture(tileData.texture));

        const style = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 14,
            fontStyle: 'italic',
            fontWeight: 'bold',
            fill: '#FF9900',
        });
    

        this.number = new PIXI.Text('00', style);
        this.data = tileData;
        this.x = tileData.x;
        this.y = tileData.y;
        this.visible = tileData.visible;

       
        this.addChild(this.sprite);
        //this.addChild(this.number);
    }
    destroy(options) {
        super.destroy(options);
        this.data = null;
    }

    updateNumber(number){
      // this.number.text = `${number}`;
    }
}
export default Tile;