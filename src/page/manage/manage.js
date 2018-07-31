import React, {Component} from 'react';

import ProductList from '../../components/admin/product_list';
import ProductItem from '../../components/admin/product_item';



import {Link} from 'react-router-dom';

import { connect } from 'react-redux';


import {FetchProductsAPI,DeleteProductAPI} from './../../actions/index'

class Manage extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [],
        }
    }
    componentDidMount(){
        this.props.fetchAllProducts();
    }
    onDelete = (id,category) => {
        this.props.onDeleteProduct(id,category);

    }
    render(){
        
        var {products}=this.props;

        return (
            <div className="container">
                
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        
                        <Link to="/add" className="btn btn-info mb-10 "><span className="fa fa-plus mr-5"></span>Add product</Link>
                        
                        <ProductList>
                            {this.showProduct(products)}
                        </ProductList>
                            
                        
                    </div>
                </div>
                
            </div>
        )
    }
    showProduct(products) {
        var result = null;
        if( products.length > 0){ 
            result = products.map((product, index) => {
                return <ProductItem key={index} product={product} index={index} onDelete={this.onDelete}/>
                
            })
        }
        console.log("message", result)
        return result;
      
    
    }
    
}
const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const  mapDispatchToProps = (dispatch,props) => {
    return {
        fetchAllProducts: () => {
            dispatch(FetchProductsAPI());
        },
        onDeleteProduct: (id,category) => {
            dispatch(DeleteProductAPI(id,category));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Manage);