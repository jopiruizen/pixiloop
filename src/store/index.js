import { init } from '@rematch/core';
import selectPlugin from '@rematch/select';
import thunk from 'redux-thunk';
import * as models from './models';
const middlewares = [thunk];

const store = init({
    redux: {
      middlewares,
    },
    models: { ...models, },
    plugins: [selectPlugin],
  });
  
  export const { select, dispatch, getState } = store;
  export default store;
  