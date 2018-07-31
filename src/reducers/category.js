import * as Types from './../constants/action-type';


var initialState = [];

const category = (state = initialState, action) => {

    switch (action.type) {
        case Types.FETCH_CATEGORY:
            state = action;
            console.log("state", state);
            return [...state];
        default:
            return state;
    }
}

export default category;