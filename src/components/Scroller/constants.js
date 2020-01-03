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

export const KeyCodesDirections = {
    "87": Directions.UP,
    "65": Directions.LEFT,
    "83": Directions.DOWN,
    "68": Directions.RIGHT,
    "38": Directions.UP,
    "37": Directions.LEFT,
    "40": Directions.DOWN,
    "39": Directions.RIGHT,
}