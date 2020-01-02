import { map1 } from './maps';

export const initialState = {
    blockSize: 50,
    widthSize: 12,
    heightSize: 12,
    map: map1,
    worldWidth: 12 * 50,
    worldHeight: 12 * 50,
    peletteX: 0,
    peletteY: 0,
    peletteShown: true,
    hasPelette: false,
};