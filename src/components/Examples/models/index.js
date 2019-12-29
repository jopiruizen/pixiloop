import omit from 'lodash/omit';
import * as effects from './effects';
import reducer from './reducers';
import * as selectors from './selectors';

const initialState = {
    defaultUser: {
        name: 'Phil',
        last: 'Ardona',
        userId: '12345',
    },
    users: [],
};

export default {
    name: 'examples',
    state: initialState,
    effects: () => effects,
    reducers: reducer.reducers,
    selectors: omit(selectors, Object.keys(selectors).filter(prop => selectors[prop].omitToRematch)),
};
  