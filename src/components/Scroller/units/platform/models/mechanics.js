import { Modes } from '../../../constants';
import { scrollTiles , updateVisibleArea, hadReachedEdge ,setHerosEdge } from './utility/platformScroll';

const updatePlatformState =  {

    mechanicsFunction: ( { state, key} ) => {

        const platformState = state[key];
        const keyState = state['keyPress'];
        const heroState = state['hero'];

        

        if (hadReachedEdge(platformState, keyState.direction)) {
            setHerosEdge(heroState, keyState.direction);
            return { state, changes: ['hero'] };
        }

        if( heroState.atMiddleX === false ){
            return { changes: [] };
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