import React, { Component } from 'react';
import {Link} from 'react-router-dom';
const formatCurrency = require('format-currency')
class CartResult extends Component {
    render() {
        var { cart } = this.props;
        let opts = { format: '%v %c', code: 'VND' }
        return (
            <tr>
                <td>
                    <Link to="/" className="btn btn-primary waves-effect waves-light btn-bg-color">Back
                            
                    </Link>
                </td>
                <td colSpan="2"></td>
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        <strong>{formatCurrency(this.showTotalAmount(cart),opts)}</strong>
                    </h4>
                </td>
                <td colSpan="3">
                    <button type="button" className="btn btn-primary waves-effect waves-light btn-bg-color">Complete purchase
                            <i className="fa fa-angle-right right"></i>
                    </button>
                </td>
            </tr>
        );
    }

    showTotalAmount = (cart) => {
        var total = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                total += cart[i].product.price * cart[i].quantity;
            }
        }
        return total;
    }

}

export default CartResult;
