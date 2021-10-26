import React, { Component } from 'react';

class productItem extends Component {
    render() {
        var { product } = this.props;
        return (
            <div className="grid_1_of_4 images_1_of_4">
                <a href="preview.html"><img src="/asserts/images/feature-pic1.jpg" alt="" /></a>
                <h2>{product.name}</h2>
                <div className="price-details">
                    <div className="price-number">
                        <p><span className="rupees">${product.price}</span></p>
                    </div>
                    <div className="add-cart">
                        <h4><a href="preview.html">Add to Cart</a></h4>
                    </div>
                    <div className="clear" />
                </div>
            </div>
        );
    }
}

export default productItem;