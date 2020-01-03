import { Directions, Speed } from '../../../constants';

export const initialState = {
    nodeSize: 50,
    stepSize: 50 / 4,
    mapPositionX: 3,
    mapPositionY: 3,
    speed: Speed.INSANE,
    speedCycle: 0,
};

export const initialNodes = [
    {   
        /* head node */
        x: initialState.nodeSize * 5,
        y: initialState.nodeSize * 5, 
        direction: Directions.RIGHT,
        nextDirection: Directions.RIGHT,
    },

    {   
        x: initialState.nodeSize * 4,
        y: initialState.nodeSize * 5, 
        direction: Directions.RIGHT,
        nextDirection: Directions.RIGHT,
    },

    {   
        x: initialState.nodeSize * 3,
        y: initialState.nodeSize * 5, 
        direction: Directions.RIGHT,
        nextDirection: Directions.RIGHT,
    },

];
