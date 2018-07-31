import React,{ Component } from "react";
import {Link} from 'react-router-dom';

import { connect } from 'react-redux';
import { searchProduct } from "./../actions";
import CartHeader from "./cart-header";
import CartTotalHeader from "./cart-total-header";

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            keyword: ''
        }
    }
    onHandleChange = (event) =>{
        this.setState({
            keyword: event.target.value
        })
    }
    onSearch = () => {
        this.props.onSearch(this.state.keyword);
    }
    render () {
        var {keyword} = this.state;
        var {cart} = this.props;
        console.log('cart',cart);
        return (
                <div id="header">
                    <div className="header-top bg-green">
                        <div className="container">
                            <div className="pull-left auto-width-left">
                                <ul className="top-menu menu-beta l-inline">
                                    <li><a href=""><i className="fa fa-home"></i> 90-92 Lê Thị Riêng, Bến Thành, Quận 1</a></li>
                                    <li><a href=""><i className="fa fa-phone"></i> 0163 296 7751</a></li>
                                </ul>
                            </div>
                            <div className="pull-right auto-width-right">
                                <ul className="top-details menu-beta l-inline">
                                    <li><a href=""><i className="fa fa-user"></i>Account</a></li>
                                    <li><Link to="/register">Sign up</Link></li>
                                    <li><Link to="/login">Sign in</Link></li>
                                    
                                </ul>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div> 
                    <div className="header-body">
                        <div className="container beta-relative">
                            <div className="pull-left">
                                <a href="/" id="logo">
                                <img src="image/logo/logo.png" alt=""/></a>
                            </div>
                            <div className="pull-right beta-components space-left ov">
                                <div className="space10">&nbsp;</div>
                                <div className="beta-comp">
                                    <form   id="searchform" >
                                        <input 
                                            type="text" 
                                            value={keyword}
                                            name="keyword" 
                                            onChange={this.onHandleChange}
                                            placeholder="Enter keyword..." />
                                        <button onClick={this.onSearch} className="fa fa-search" type="button" id="searchsubmit"></button>
                                    </form>
                                </div>

                                <div className="beta-comp">
                                    <div className="cart">
                                        <div className="beta-select"><i className="fa fa-shopping-cart"></i>{cart.length > 0?`Cart(${cart.length})`:"Cart (Empty)"}  <i className="fa fa-chevron-down"></i></div>
                                        <div className="beta-dropdown cart-body">
                                            {this.showCartHeader(cart)}
                                            {this.showTotalAmount(cart)}
                                            
                                        </div>
                                    </div> 
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div> 
                    </div> 
                    <div className="header-bottom" style={{backgroundColor:" #65d31f"}}>
                        <div className="container">
                            <a className="visible-xs beta-menu-toggle pull-right" href=""><span className='beta-menu-toggle-text'>Menu</span> <i className="fa fa-bars"></i></a>
                            <div className="visible-xs clearfix"></div>
                            <nav className="main-menu">
                                <ul className="l-inline ov">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/product">Product</Link>
                                        <ul className="sub-menu">
                                            <li><a href="product_type.html">Sản phẩm 1</a></li>
                                            <li><a href="product_type.html">Sản phẩm 2</a></li>
                                            <li><a href="product_type.html">Sản phẩm 4</a></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                                <div className="clearfix"></div>
                            </nav>
                        </div> 
                    </div> 
                </div>
        )
    }
    showCartHeader = (cart) =>{
        var result = null;
        if(cart.length > 0){
            result = cart.map((item,index) => {
                return <CartHeader key={index} item={item}/>
            })
        }
        return result;
    }
    showTotalAmount = (cart) => {
        var total = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                total += cart[i].product.price * cart[i].quantity;

            }
            return <CartTotalHeader total={total}/>
        }
        return total;
    }
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = (keyword) => {
    return dispatch => {
        return {
            onSearch: (keyword) => {
                dispatch(searchProduct(keyword));
            }
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);