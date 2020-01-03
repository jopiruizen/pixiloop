import { initialState , initialNodes} from './states';
import mechanics from './mechanics';
import dispatch from './dispatch';

export default {
    name: 'snake',
    state: { 
        ...initialState,
        nodes: [...initialNodes],
    },
    mechanics,
    dispatch,
};