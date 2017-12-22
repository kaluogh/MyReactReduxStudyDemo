import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {reducer as todoReducer} from './todos';
import {reducer as filterReducer} from './filter';

import Perf from 'react-addons-perf';

const reducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer
  });

//for tool 
const win = window;
win.Perf = Perf

const middlewares = [];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(require('redux-immutable-state-invariant')());
}

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);
//end - for tool

export default createStore(reducer, {}, storeEnhancers);