import { combineReducers } from 'redux';
import chatReducer from './chatReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
	chat:chatReducer,
	loading:loadingReducer
});

export default rootReducer;