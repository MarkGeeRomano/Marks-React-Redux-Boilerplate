import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import count from './count';

const rootReducer = combineReducers({
    count
});

export default rootReducer;
