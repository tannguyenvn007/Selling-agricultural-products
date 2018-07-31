import React, { Component } from 'react';
import {Link} from 'react-router-dom'
const formatCurrency = require('format-currency')

class ProductItem extends Component {
    onDelete = (id,CategoryId) => {
        if(window.confirm("Are you sure ?")){
            this.props.onDelete(id,CategoryId);
        }
        
    }
    render() {
        let opts = { format: '%v %c', code: 'VND' }
        var {index, product} = this.props;
        if (!product) return null; 
        return (
            
                <tr>
                    <td>{index + 1}</td>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td><img className="img-thumbnail" src={`image/product/product/${product.image.substr(12)}`} width="100px" height="100px" alt="product"/></td>
                    <td>{formatCurrency(product.price, opts)}</td>
                    <td>

                        <span className={product.status === true ? "label label-success" : "label label-warning"}>{product.status === true ? "New" : "Old"}</span>

                    </td>
                    <td>{product.description}</td>
                    <td>

                        <Link to={`${product.CategoryId}/${product.id}/edit`} className="btn btn-danger mr-10">Edit</Link>
                        <button type="button" className="btn btn-warning" onClick={() => this.onDelete(product.id,product.CategoryId)}>Delete</button>

                    </td>
                </tr>
            
        )
    }
}
export default ProductItem;