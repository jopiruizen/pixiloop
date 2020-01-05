import { Tiles1 } from './tiles';

export const initialState = {
    unitSize: 50,
    stepSize: 50 / 10,
    stepChange: 0,
    fullStepComplete: false,
    renderedOffset: 2,
    stageVisibility: {
        startX: 4,
        startY: 0,
        width: 15,
        height: 12,
    },

    fullStageSize: {
        width: Tiles1[0].length,
        height: Tiles1.length,
    },

    computedSize: {
        width: Tiles1[0].length * 50,
        height: Tiles1.length * 50,
    },
    stage:[],
    tiles: Tiles1,
};