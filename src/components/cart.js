import React, { Component} from 'react';



class Cart extends Component {
    render() {
        var {children} = this.props;
        return ( 
        <section className = "section" >
            <div className = "table-responsive">
                <table className = "table product-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th> 
                            <th>Price</th>
                            <th>Quantity(Kg)</th>
                            <th>Total</th> 
                            <th></th> 
                        </tr > 
                    </thead> 
                    <tbody> 
                        {children}
                    </tbody> 
                </table>
            </div>
            </section>
        );
    }
}

export default Cart;