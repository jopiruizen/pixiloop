import * as PIXI from 'pixi.js';


export const TextureNames = {
    TILE: 'TILE',
    MASK: 'MASK',
    ROADBLOCK: 'ROADBLOCK',
    FACE: 'FACE',
};

const Textures = {
    TILE: PIXI.Texture.from("assets/tile.png"),
    MASK: PIXI.Texture.from("assets/mask.png"),
    ROADBLOCK: PIXI.Texture.from("assets/roadblock.png"),
    FACE: PIXI.Texture.from("assets/roadblock.png"),
}

export default Textures;

export function toTexture(name) {
    return Textures[name];
}