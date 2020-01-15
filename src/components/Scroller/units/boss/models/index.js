import { initialState } from './states';
import mechanics from './mechanics';
import dispatch from './dispatch';
import setup from './setup'; /* can be removed or not */

export default {
    name: 'boss',
    state: { 
        ...initialState,
    },
    mechanics,
    dispatch,
    setup,
};