import React from 'react'
import Product from './product';
class ProductList extends React.Component {
    render() {
        return (
            this.props.products.map((product, index) => (
                <Product selectProduct={this.props.selectProduct}   product={product} key={index} />
            ))
        );
    }
}


export default ProductList