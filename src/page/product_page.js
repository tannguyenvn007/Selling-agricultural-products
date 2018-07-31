import React,{ Component } from "react";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchCategoryAPI } from "../actions";
class Product extends Component {
    componentDidMount() {
        this.props.fetchAllCategory();
        
      }
    render(){
        var {category} = this.props;
        console.log(category);
        return (
            <div>
                <div className="inner-header">
                    <div className="container">
                        <div className="pull-left">
                            <h6 className="inner-title">Sản phẩm</h6>
                        </div>
                        <div className="pull-right">
                            <div className="beta-breadcrumb font-large">
                                <Link to="/">Home</Link> / <span>Sản phẩm</span>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
                <div className="container">
                    <div id="content" className="space-top-none">
                        <div className="main-content">
                            <div className="space60">&nbsp;</div>
                            <div className="row">
                                <div className="col-sm-3">
                                    <ul className="aside-menu">
                                        <li><a href="">Typography</a></li>
                                        
                    
                                    </ul>
                                </div>
                                <div className="col-sm-9">
                                    <div className="beta-products-list">
                                        <h4>New Products</h4>
                                        <div className="beta-products-details">
                                            <p className="pull-left">438 styles found</p>
                                            <div className="clearfix"></div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="single-item">
                                                    <div className="single-item-header">
                                                        <a href="product.html"><img src="assets/dest/images/products/1.jpg" alt=""/></a>
                                                    </div>
                                                    <div className="single-item-body">
                                                        <p className="single-item-title">Sample Woman Top</p>
                                                        <p className="single-item-price">
                                                            <span>$34.55</span>
                                                        </p>
                                                    </div>
                                                    <div className="single-item-caption">
                                                        <a className="add-to-cart pull-left" href="shopping_cart.html"><i className="fa fa-shopping-cart"></i></a>
                                                        <a className="beta-btn primary" href="product.html">Details <i className="fa fa-chevron-right"></i></a>
                                                        <div className="clearfix"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="single-item">
                                                    <div className="single-item-header">
                                                        <a href="product.html"><img src="assets/dest/images/products/1.jpg" alt=""/></a>
                                                    </div>
                                                    <div className="single-item-body">
                                                        <p className="single-item-title">Sample Woman Top</p>
                                                        <p className="single-item-price">
                                                            <span>$34.55</span>
                                                        </p>
                                                    </div>
                                                    <div className="single-item-caption">
                                                        <a className="add-to-cart pull-left" href="shopping_cart.html"><i className="fa fa-shopping-cart"></i></a>
                                                        <a className="beta-btn primary" href="product.html">Details <i className="fa fa-chevron-right"></i></a>
                                                        <div className="clearfix"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="single-item">
                                                    <div className="single-item-header">
                                                        <a href="product.html"><img src="assets/dest/images/products/1.jpg" alt=""/></a>
                                                    </div>
                                                    <div className="single-item-body">
                                                        <p className="single-item-title">Sample Woman Top</p>
                                                        <p className="single-item-price">
                                                            <span>$34.55</span>
                                                        </p>
                                                    </div>
                                                    <div className="single-item-caption">
                                                        <a className="add-to-cart pull-left" href="shopping_cart.html"><i className="fa fa-shopping-cart"></i></a>
                                                        <a className="beta-btn primary" href="product.html">Details <i className="fa fa-chevron-right"></i></a>
                                                        <div className="clearfix"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space50">&nbsp;</div>

                                    <div className="beta-products-list">
                                        <h4>Top Products</h4>
                                        <div className="beta-products-details">
                                            <p className="pull-left">438 styles found</p>
                                            <div className="clearfix"></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="single-item">
                                                    <div className="single-item-header">
                                                        <a href="product.html"><img src="assets/dest/images/products/1.jpg" alt=""/></a>
                                                    </div>
                                                    <div className="single-item-body">
                                                        <p className="single-item-title">Sample Woman Top</p>
                                                        <p className="single-item-price">
                                                            <span>$34.55</span>
                                                        </p>
                                                    </div>
                                                    <div className="single-item-caption">
                                                        <a className="add-to-cart pull-left" href="shopping_cart.html"><i className="fa fa-shopping-cart"></i></a>
                                                        <a className="beta-btn primary" href="product.html">Details <i className="fa fa-chevron-right"></i></a>
                                                        <div className="clearfix"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="single-item">
                                                    <div className="single-item-header">
                                                        <a href="product.html"><img src="assets/dest/images/products/1.jpg" alt=""/></a>
                                                    </div>
                                                    <div className="single-item-body">
                                                        <p className="single-item-title">Sample Woman Top</p>
                                                        <p className="single-item-price">
                                                            <span>$34.55</span>
                                                        </p>
                                                    </div>
                                                    <div className="single-item-caption">
                                                        <a className="add-to-cart pull-left" href="shopping_cart.html"><i className="fa fa-shopping-cart"></i></a>
                                                        <a className="beta-btn primary" href="product.html">Details <i className="fa fa-chevron-right"></i></a>
                                                        <div className="clearfix"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="single-item">
                                                    <div className="single-item-header">
                                                        <a href="product.html"><img src="assets/dest/images/products/1.jpg" alt=""/></a>
                                                    </div>
                                                    <div className="single-item-body">
                                                        <p className="single-item-title">Sample Woman Top</p>
                                                        <p className="single-item-price">
                                                            <span>$34.55</span>
                                                        </p>
                                                    </div>
                                                    <div className="single-item-caption">
                                                        <a className="add-to-cart pull-left" href="shopping_cart.html"><i className="fa fa-shopping-cart"></i></a>
                                                        <a className="beta-btn primary" href="product.html">Details <i className="fa fa-chevron-right"></i></a>
                                                        <div className="clearfix"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space40">&nbsp;</div>
                                        
                                    </div> 
                                </div>
                            </div> 
                        </div> 
                    </div> 
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        category: state.category
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
      fetchAllCategory: () => {
        dispatch(fetchCategoryAPI);
      }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Product);