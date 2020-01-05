import * as states from './states';
import mechanics from './mechanics';
import dispatch from './dispatch';
import setup from './setup';

export default {
    name: 'platform',
    state: { ...states.initialState },
    mechanics,
    dispatch,
    setup,
};