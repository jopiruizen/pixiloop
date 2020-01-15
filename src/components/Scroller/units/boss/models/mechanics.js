import { Modes, Directions} from '../../../constants';

import { bossMoves } from '../../commons/bossMoves';

const bossActions = {

    mechanicsFunction: ({state, key}) => {

        let boss = state[key];
        let platform = state.platform;
        
        bossMoves( {boss, platform} ); 

        return {
            state,
            changes: [key],
        };
    },
    modes: [ Modes.PLAY ],
};

export default {
    bossActions,
}