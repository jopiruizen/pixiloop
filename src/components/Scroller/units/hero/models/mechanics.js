import { Modes, Directions} from '../../../constants';

import { heroOnMotion } from './utility/movement';

const heroMove = {
    mechanicsFunction: ({state, key}) => {

        let hero = state[key];
        let platform = state.platform;
        let keyPress = state.keyPress;
        heroOnMotion( {hero, platform, keyPress} );

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