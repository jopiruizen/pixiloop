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
    mapX: 5,
    mapY: 5,
    x: 0,
    y: 0,

    life: 50,

    /* ai related */
    isThinking: false,
    action:{
        type: -1,
        completed: true,
    }
};

export const MoveCode = {
    WAIT: 0,
    WALK: 1,
    JUMP: 2,
    ATTACK: 3,
    JUMP_ATTACK: 4,
};

const Level = {
    INSANE: [4,4,4,4,3,3,3,2,1,0],
    TOUGH:  [4,4,3,3,3,2,2,1,1,0],
    HARD:   [4,4,3,3,2,2,1,1,1,0],
    MEDIUM: [4,3,3,2,2,1,1,1,0,0],
    EASY:   [4,3,2,1,1,1,1,0,0,0],
};

export function getActionSet(boss){

    return [1,1,1,1,1,1,1,1,1,1];
    if( boss.life <= 5) {
        return Level.INSANE;
    } 
    
    else if( boss.life > 5  && boss.life <= 15) {
        return Level.TOUGH;
    }

    else if( boss.life > 15  && boss.life <= 25) {
        return Level.HARD;
    }

    else if( boss.life > 25 && boss.life <= 35 ) {
        return Level.MEDIUM;
    }
    return Level.EASY;
};