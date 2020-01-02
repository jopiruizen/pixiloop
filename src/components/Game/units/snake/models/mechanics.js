import { Modes, Directions} from '../../../constants';

import { getGameState } from '../../../../../pixiloop';

function hadFinishedAFullStep(state){
     if( state.x % 50 === 0 && state.y % 50 === 0) {
         return true;
     }
     return false;
}

function updateMapPosition(state, node) {
    if( node.x === 0) {
        node.mapPositionX = 0;
    } else {
        node.mapPositionX = node.x / state.nodeSize;
    }

    if( node.y === 0) {
        node.mapPositionY = 0;
    } else {
        node.mapPositionY = node.y / state.nodeSize;
    }
}

function nodeOffScreen(state,node) {
    const fullState = getGameState();
    const world = fullState.world;
    if( node.x >= world.worldWidth) {
        node.x = 0;
    } else if (node.x < 0 - state.nodeSize){
        node.x = world.worldWidth;
    }

    if( node.y >= world.worldHeight) {
        node.y = 0;
    } else if (node.y < 0 - state.nodeSize){
        node.y = world.worldHeight;
    }
}


function updateNode(state, node){
    if (node.direction === Directions.UP ) {
        node.y -= state.stepSize;
    } else if (node.direction === Directions.DOWN ) {
        node.y += state.stepSize;
    } else if (node.direction === Directions.LEFT ) {
        node.x -= state.stepSize;
    } else if (node.direction === Directions.RIGHT ) {
        node.x += state.stepSize;
    } 
}

function updateNodes(state) {
    for( var i = 0; i < state.nodes.length; i++) {
        const node = state.nodes[i];
        updateNode(state, node);
        if( hadFinishedAFullStep(node)) {
            nodeOffScreen(state,node);
            updateMapPosition(state, node);
            node.oldDirection = node.direction;
            if (i === 0) {
                node.direction = node.nextDirection;
            } else {
                node.direction = state.nodes[i-1].oldDirection;
            }
        }
    }
}

function snakeMove(state) {
    let newState = {...state};
    updateNodes(newState);
    return newState;
}

const snakeMotion = {
    mechanicsFunction: ({state, key}) => {
        let snakeState = {...state[key]};
        snakeState.speedCycle += 1;
        if( snakeState.speedCycle >= snakeState.speed){
            snakeState = snakeMove(snakeState);
            snakeState.speedCycle = 0;
        }
      
        return {
            state: { ...state, [key]: { ...snakeState } },
            changes: [key],
        };
    },
    modes: [ Modes.PLAY ],
};

export default {
    snakeMotion,
}