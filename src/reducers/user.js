import * as Types from './../constants/action-type';

var initialState = [];

const user = (state = initialState, action) => {
    switch(action.type){
        case Types.REGISTER:
          state.push(action.user);
          return [...state];
        default:
            return state;
    }
}
export default user;