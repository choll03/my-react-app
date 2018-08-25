import { MESSAGE_STATUS, LIST_USER_STATUS } from '../Actions/chatAction';

export default function (state = {}, action) {
	switch(action.type){
		case MESSAGE_STATUS:
			return { ...state,loadingMessage:action.payload }
		case LIST_USER_STATUS:
			return { ...state,loadingListUser:action.payload }
		default:
			return state;
	}
}