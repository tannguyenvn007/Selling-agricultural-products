import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/cart';
import * as Message from './../constants/message';
import CartItem from '../components/cart_item';
import CartResult from '../components/cart-result';
import { deleteProductInCart, changeMessage, updateProductInCart } from '../actions';


class CartContainer extends Component {
    render() {
        var { cart } = this.props;
        console.log("cart", cart)
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        )
    }
    showCartItem = (cart) => {
        var {onDeleteProductInCart,onChangeMessage,onUpdateProductInCart} = this.props;
        var result = <tr><td>{ Message.MSG_CART_EMPTY}</td></tr>;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem
                        key={index}
                        item={item}
                        index={index}
                        onDeleteProductInCart={onDeleteProductInCart}
                        onChangeMessage={onChangeMessage}
                        onUpdateProductInCart={onUpdateProductInCart}
                    />
                )
            })
        }
        return result;
    }
    showTotalAmount = (cart) => {
        var result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result;
    }
}
CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            // inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })
    )
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}
const mapDispathToProps = (dispatch,props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(deleteProductInCart(product))
        },
        onChangeMessage: (message) => {
            dispatch(changeMessage(message));
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(updateProductInCart(product,quantity));
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(CartContainer);