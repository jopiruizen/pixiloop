import * as states from './states';
import mechanics from './mechanics';
import dispatch from './dispatch';

export default {
    name: 'world',
    state: { ...states.initialState },
    mechanics,
    dispatch,
};