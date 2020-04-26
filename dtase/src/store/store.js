import { createStore, applyMiddleware } from 'redux';

// redux-logger is a middleware that lets you log every state change
// import logger from 'redux-logger';

// redux-thunk is a middleware that lets you dispatch async actions
// import thunk from 'redux-thunk';

import rootReducer from './reducers';

// const middleware = applyMiddleware(thunk, logger);
const middleware = applyMiddleware();
const store = createStore(rootReducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
