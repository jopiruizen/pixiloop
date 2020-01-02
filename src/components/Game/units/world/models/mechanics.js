import { Modes, randomRange } from '../../../constants';
 
function peletteXY(state){
    return { 
        x: randomRange(0, state.widthSize - 1), 
        y: randomRange(0, state.heightSize - 1),
    };
}

const popPelette =  {
    
    mechanicsFunction: ( { state, key} ) => {
        const wolrdState = state[key];
        
        if (wolrdState.hasPelette === false) {
            let point = peletteXY(wolrdState);
            wolrdState.peletteX = point.x;
            wolrdState.peletteY = point.y;
            wolrdState.hasPelette = true;
            wolrdState.peletteShown = false;
        }
        
        return { 
            state: { ...state, [key]: { ...wolrdState } },
            changes: [key],
        };
    },
    modes: [Modes.PLAY],
}
export default {
    popPelette,
}