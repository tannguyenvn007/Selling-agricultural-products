import React, { Component } from "react";
import Slide from "./../components/slide"
import ProductNew from "../components/product_new";
import { connect } from 'react-redux';

import { FetchProductsAPI } from './../actions/index'


class Home extends Component {
  
  componentDidMount() {
    this.props.fetchAllProducts();
    
  }
  render() {
    
    var { products, keyword } = this.props;
    if (keyword) {
      products = products.filter((pro) => {
        return pro.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      });
    }

    return (
      <div className="rev-slider">
        <Slide />
        <div className="container">
          <div id="content" className="space-top-none">
            <div className="main-content">
              <div className="space60">&nbsp;</div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="beta-products-list">
                    <h4 className="product-title">Products</h4>
                    <div className="beta-products-details">
                      <p className="pull-left">{products.length} products found</p>
                      <div className="clearfix"></div>
                    </div>
                    <div className="row">

                      {this.showProduct(products)}

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
  showProduct(products) {
    var result = null;
    
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductNew key={index} product={product} index={index}/>

      })
    }
    return result;
  }

}


const mapStateToProps = (state) => {
  return {
    products: state.products,
    keyword: state.searchProduct
  }
} 

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(FetchProductsAPI());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);