import * as Types from './../constants/action-type';
import callApi from './../apiCaller'

export const FetchProductsAPI = () => {
    return (dispatch) => {
        return callApi('https://www.mockapi.io/api/mocks/5b42e42263839a00144c0187/resources/5b42e44163839a00144c0189/data?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1YjIwOTU0ZWNhNzYyMDAwMTQ3YjI1YzAiLCJpYXQiOjE1MzE0NTQxNjQyNjYsImV4cCI6MTUzNDA0NjE2NDI2Nn0.qH6Y0XxXGFlJA_3FpnwbXC9E1COSV25AVHurmWpQ4Xw', 'GET', null).then(res => {
            dispatch(FetchProducts(res.data))
        })

    }
}

export const FetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCT,
        products
    }
}

export const DeleteProductAPI = (id, category) => {
    return dispatch => {
        return callApi(`http://5b42e42263839a00144c0186.mockapi.io/Categories/${category}/products/${id}`, 'DELETE', null).then(res => {
            dispatch(DeleteProduct(id))
        })
    }
}
export const DeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}
export const FetchProductDetailsAPI = (id, category) => {
    return dispatch => {
        return callApi(`http://5b42e42263839a00144c0186.mockapi.io/Categories/${category}/products/${id}`, 'GET', null).then(res => {
            dispatch(FetchProductDetails(res.data));
        })
    }
}
export const FetchProductDetails = (productDetails) => {
    return {
        type: Types.FETCH_PRODUCT_DETAILS,
        productDetails
    }
}
export const AddProductAPI = (category, product) => {
    return dispatch => {
        return callApi(`http://5b42e42263839a00144c0186.mockapi.io/Categories/${category}/products`, 'POST', product).then(res => {
            dispatch(AddProduct(res.data));
        })
    }
}
export const AddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}
export const getProductAPI = (id, category) => {
    return (dispatch) => {
        return callApi(`http://5b42e42263839a00144c0186.mockapi.io/Categories/${category}/products/${id}`, 'GET', null).then(res => {
            dispatch(getProduct(res.data));
        });
    }
}
export const getProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}
export const updateProductAPI = (product, categoryId) => {
    return (dispatch) => {
        return callApi(`http://5b42e42263839a00144c0186.mockapi.io/Categories/${categoryId}/products/${product.id}`, 'PUT', product).then( res =>{
            dispatch(updateProduct(res.data));
        });
    }
}
export const updateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}

export const searchProduct = (keyword) => {
    return {
        type: Types.SEARCH,
        keyword
    }
}

export const addCart = (product,quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product,
        quantity
    }
}
export const changeMessage = (message) => {
    return {
        type: Types.CHANGE_MESSAGE,
        message
    }
}
export const deleteProductInCart = (product) => {
    return {
        type: Types.DELETE_PRODUCT_IN_CART,
        product
    }
}
export const updateProductInCart = (product, quantity) => {
    return {
        type: Types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}
export const registerAPI = (user) => {
    return dispatch => {
        return callApi(`http://5b42e42263839a00144c0186.mockapi.io/users`, 'POST', user).then(res => {
            dispatch(register(res.data));
        })
    }
}
export const register = (user) => {
    return {
        type: Types.REGISTER,
        user
    }
}
export const fetchCategoryAPI = () => {
    return dispatch => {
        return callApi(`http://5b42e42263839a00144c0186.mockapi.io/Categories`, 'GET', null).then(res => {
            dispatch(fetchCategory(res.data));
        })
    }
}
export const fetchCategory = (category) => {
    return {
        type: Types.FETCH_CATEGORY,
        category
    }
}