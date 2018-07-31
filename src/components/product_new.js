import React, { Component } from "react";
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

const formatCurrency = require('format-currency')
class ProductNew extends Component {

    render() {
        let opts = { format: '%v %c', code: 'VND' }
        var { product } = this.props;
        return (
            <div>
                <div className="col-sm-3">
                    <div className="card single-item text-center ">
                        <div className="single-item-header">
                            <Link to={`${product.CategoryId}/${product.id}/details`}>
                                <img className="img-thumbnail" src={`image/product/product/${product.image.substr(12)}`} alt="" />
                            </Link>
                        </div>
                        <div className="single-item-body">
                            <p className="single-item-title"><strong>{product.name}</strong></p>
                            <ul className="rating">
                                <li>
                                    {this.showRatings(product.rating)}
                                </li>
                                
                            </ul>
                            <p className="single-item-price">
                                <span className="price">{formatCurrency(product.price, opts)}</span>
                            </p>
                        </div>
                        {/* <div className="single-item-caption">
                            <a className="add-to-cart pull-left" href="shopping_cart.html"><i className="fa fa-shopping-cart"></i></a>
                            <a className="beta-btn primary" href="product.html">Details <i className="fa fa-chevron-right"></i></a>
                            <div className="clearfix"></div>
                        </div> */}
                    </div>
                    <div className="space50">&nbsp;</div>
                </div>

            </div>
        )
    }
    
    showRatings(rating) {
        var result = [];
        for(var  i = 1; i <= rating;i++){
            result.push(<i key={i} className="fa fa-star"></i>);
        }
        for(var j = 1; j <= (5 - rating);j++){
            result.push(<i key={j + i} className="fa fa-star-o"></i>);
        }
        return result;
    }
}
const mapStateToProps = (state) => {
    return {

    }
}
export default connect(mapStateToProps, null)(ProductNew);