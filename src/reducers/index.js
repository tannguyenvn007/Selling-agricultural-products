import {combineReducers} from 'redux';
import products from './product_red';
import itemEditing from './product_item';
import searchProduct from './search_pro';
import cart from './cart';
import message from './message';
import user from './user';
import category from './category';
import proDetails from './product_details'
const appReducers = combineReducers ({
    products,
    itemEditing,
    searchProduct,
    cart,
    message,
    user,
    category,
    proDetails
});
export default appReducers;