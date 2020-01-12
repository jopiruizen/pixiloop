import { Directions, Speed } from '../../../constants';

export const initialState = {
    verticalSpeed: 0,
    atExactTile: false,
    jumpSpeedStart: 20,
    gravity: 2,
    atGround: false,
    platformEdge: -1,
    boundsOffset: 1,

    width: 50,
    height: 80,
    stepSize: 50/10,
    mapX: 3,
    mapY: 3,
    x: 0,
    y: 0,
};