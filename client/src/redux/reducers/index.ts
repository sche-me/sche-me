import couriers from './courierReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    couriers
});

export default rootReducer;