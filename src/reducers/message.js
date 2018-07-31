import * as Types from './../constants/action-type';
import * as Message from './../constants/message'

var initialState = Message.MSG_WELCOME;

const message = (state = initialState,action) => {
    
    switch(action.type){
        case Types.CHANGE_MESSAGE:
            return action.message;
        default:
            return state;
    }
}

export default message;