import { Modes, Directions} from '../../../constants';

import { characterMotion } from '../../commons/characterMotion';

const heroMove = {
    mechanicsFunction: ({state, key}) => {

        let hero = state[key];
        let platform = state.platform;
        let keyPress = state.keyPress;
        characterMotion( {hero, platform, keyPress} ); 

        return {
            state,
            changes: [key],
        };
    },
    modes: [ Modes.PLAY ],
};

export default {
    heroMove,
}