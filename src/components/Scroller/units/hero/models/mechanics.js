import { Modes, Directions} from '../../../constants';

import { getGameState, getDispatch } from '../../../../../pixiloop';


const heroMove = {
    mechanicsFunction: ({state, key}) => {
        return {
            state,
            changes: [],
        };
    },
    modes: [ Modes.PLAY ],
};

export default {
    heroMove,
}