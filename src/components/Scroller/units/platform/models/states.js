import { Tiles1 } from './tiles';

export const initialState = {
    blockSize: 50,
    widthSize: Tiles1[0].length,
    heightSize: Tiles1.length,
    worldWidth: Tiles1[0].length * 50,
    worldHeight: Tiles1.length * 50,
    tiles: Tiles1,
};