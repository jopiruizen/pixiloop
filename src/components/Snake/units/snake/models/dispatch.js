import pixiloop from '../../../../../pixiloop';
import { Directions } from '../../../constants';

const allowedDirections = {
    '0': [Directions.RIGHT, Directions.LEFT],
    '1': [Directions.RIGHT, Directions.LEFT],
    '2': [Directions.UP, Directions.DOWN],
    '3': [Directions.UP, Directions.DOWN],
};

function changeDirection(state, {newDirection}) {
    const head =  state.snake.nodes[0];
    let allowed = allowedDirections[head.oldDirection.toString()];
    if( allowed.includes(newDirection)) {
        state.snake.nodes[0].nextDirection = newDirection;
    }
}

export default {
    changeDirection,
}