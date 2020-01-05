import { Modes } from '../../../constants';
import { scrollTiles , updateVisibleArea, hadReachedEdge } from './utility/platformScroll';

const updatePlatformState =  {
    mechanicsFunction: ( { state, key} ) => {

        const platformState = state[key];
        const keyState = state['keyPress'];

        if (hadReachedEdge(platformState, keyState.direction)) {
            return { changes: []}
        }
        scrollTiles(platformState, keyState.direction);
        platformState.fullStepComplete = false;
        const absChange = Math.abs(platformState.stepChange);
        if( absChange !== 0 && absChange % platformState.unitSize === 0) {
            updateVisibleArea(platformState, keyState.direction);
            platformState.fullStepComplete = true;
        }

        return { state , changes:[key]};
    },
    modes: [Modes.PLAY],
}
export default {
    updatePlatformState,
}