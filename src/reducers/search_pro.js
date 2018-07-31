import * as Types from './../constants/action-type';

var initialState = '';

const searchProduct = (state = initialState, action) => {
    switch(action.type){
        case Types.SEARCH:
            return action.keyword;
        default:
            return state;
    }
}
export default searchProduct;