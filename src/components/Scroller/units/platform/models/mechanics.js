import { Modes, randomRange } from '../../../constants';
 
 
const popPelette =  {
    
    mechanicsFunction: ( { state, key} ) => {
        const wolrdState = state[key];
        
        return { changes:[]};
    },
    modes: [Modes.PLAY],
}
export default {
    popPelette,
}