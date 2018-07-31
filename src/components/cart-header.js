import React,{ Component } from "react";
const formatCurrency = require('format-currency')
class CartHeader extends Component {
    render(){
        var {item} = this.props;
        let opts = { format: '%v %c', code: 'VND' }
        return (
            <div>
                <div className="cart-item"> 
                    <div className="media">
                        <a className="pull-left" href="">
                            <img src={"image/product/product/" + item.product.image.substr(12)} alt=""/></a>
                        <div className="media-body">
                            <span className="cart-item-title">{item.product.name}</span>
                            <span className="cart-item-options">{item.quantity}</span>
                            <span className="cart-item-amount">
                                <span>{item.quantity}*{formatCurrency(item.product.price,opts)}</span>
                            </span>
                        </div>
                    </div>
                </div>
                

            </div>
        )
    }
    
}
export default CartHeader;