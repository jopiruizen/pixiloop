export const Modes = {
    PLAY: 'play',
};

export const Directions = {
    UP: 0,
    DOWN: 1,
    RIGHT: 2,
    LEFT: 3,
};

export const Speed = {
    SLOW: 4,
    MEDIUM: 3,
    FAST: 2,
    INSANE: 1,
};


export function randomRange (min, max) {
    return Math.floor( Math.random() * (max - min)) + min; 
}

export const KeyTypes = {
    DIRECTIONAL: 0,
    ACTION: 1,
    SUB_ACTION: 2,
}

export const KeyCodeTypes = {

    "65": KeyTypes.DIRECTIONAL,
    "68": KeyTypes.DIRECTIONAL,

    "37": KeyTypes.DIRECTIONAL,
    "39": KeyTypes.DIRECTIONAL,
    /* j for jump */
    "74": KeyTypes.ACTION,
    /* k for kick or attack */
    "75": KeyTypes.ACTION,
};


export const KeyCodeDirections = {

    "87": Directions.UP,
    "65": Directions.LEFT,
    "83": Directions.DOWN,
    "68": Directions.RIGHT,

    "38": Directions.UP,
    "37": Directions.LEFT,
    "40": Directions.DOWN,
    "39": Directions.RIGHT,
};

export const KeyActionTypes = {
    JUMP: 0,
    ATTACK: 1,
};

export const KeyActions = {
    "74": KeyActionTypes.JUMP,
    "75": KeyActionTypes.ATTACK,
};