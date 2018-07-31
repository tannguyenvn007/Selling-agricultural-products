import React,{ Component } from "react";
const formatCurrency = require('format-currency')
class CartTotalHeader extends Component {
    render(){
        var {total} = this.props;
        let opts = { format: '%v %c', code: 'VND' }
        return (
            <div>
                <div className="cart-caption">
                    <div className="cart-total">Tổng tiền: <span className="cart-total-value">{formatCurrency(total,opts)}</span></div>
                    <div className="clearfix"></div>

                    <div className="center">
                        <div className="space10">&nbsp;</div>
                        <a href="checkout.html" className="beta-btn primary text-center">Đặt hàng <i className="fa fa-chevron-right"></i></a>
                    </div>
                </div>
            </div>
        )
    }
    
}
export default CartTotalHeader;