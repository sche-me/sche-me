import { combineReducers } from 'redux';
import postlists from './postListReducer';

const rootReducer = combineReducers({
    postlists
});

export default rootReducer;