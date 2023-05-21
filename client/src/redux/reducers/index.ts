import postList from './postListReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    postList
});

export default rootReducer;
