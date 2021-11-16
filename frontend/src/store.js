import { createStore,applyMiddleware } from 'redux';

import reducer from './reducers';


const logger = store => next => action => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
  }

const store = process.env.NODE_ENV !== 'production' ? createStore(reducer,applyMiddleware(logger)) : createStore(reducer);
  

export default store;
