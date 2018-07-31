import * as Types from './../constants/action-type';


var initialState = [];

const proDetails = (state = initialState,action) => {
    
    switch(action.type){
        case Types.FETCH_PRODUCT_DETAILS:
            state = action.productDetails;
            return state;
        default:
            return state;
    }
}

export default proDetails;