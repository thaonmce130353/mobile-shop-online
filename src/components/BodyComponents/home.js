import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Categories from '../CateAndSliConponents/categories';
import Slider from '../CateAndSliConponents/slider';

class home extends Component {
    render() {
        return (
            <div>
                <div className="header_slide">
                    <div className="header_bottom_left">
                        <Categories />
                    </div>
                    <div className="header_bottom_right">
                        <Slider />
                    </div>
                    <div className="clear" />
                </div>
                <div className="content_top">
                    <div className="heading">
                        <h3>New Products</h3>
                    </div>
                    <div className="see">
                        <p><NavLink to={`/products`}>
                            see all Products
                        </NavLink></p>
                    </div>
                    <div className="clear" />
                </div>
                <div className="section group">
                    <div className="grid_1_of_4 images_1_of_4">
                        <a href="preview.html"><img src="/asserts/images/feature-pic1.jpg" alt="" /></a>
                        <h2>Lorem Ipsum is simply </h2>
                        <div className="price-details">
                            <div className="price-number">
                                <p><span className="rupees">$620.87</span></p>
                            </div>
                            <div className="add-cart">
                                <h4><a href="preview.html">Add to Cart</a></h4>
                            </div>
                            <div className="clear" />
                        </div>
                    </div>
                    <div className="grid_1_of_4 images_1_of_4">
                        <a href="preview.html"><img src="/asserts/images/feature-pic2.jpg" alt="" /></a>
                        <h2>Lorem Ipsum is simply </h2>
                        <div className="price-details">
                            <div className="price-number">
                                <p><span className="rupees">$899.75</span></p>
                            </div>
                            <div className="add-cart">
                                <h4><a href="preview.html">Add to Cart</a></h4>
                            </div>
                            <div className="clear" />
                        </div>
                    </div>
                    <div className="grid_1_of_4 images_1_of_4">
                        <a href="preview.html"><img src="/asserts/images/feature-pic3.jpg" alt="" /></a>
                        <h2>Lorem Ipsum is simply </h2>
                        <div className="price-details">
                            <div className="price-number">
                                <p><span className="rupees">$599.00</span></p>
                            </div>
                            <div className="add-cart">
                                <h4><a href="preview.html">Add to Cart</a></h4>
                            </div>
                            <div className="clear" />
                        </div>
                    </div>
                    <div className="grid_1_of_4 images_1_of_4">
                        <a href="preview.html"><img src="/asserts/images/feature-pic4.jpg" alt="" /></a>
                        <h2>Lorem Ipsum is simply </h2>
                        <div className="price-details">
                            <div className="price-number">
                                <p><span className="rupees">$679.87</span></p>
                            </div>
                            <div className="add-cart">
                                <h4><a href="preview.html">Add to Cart</a></h4>
                            </div>
                            <div className="clear" />
                        </div>
                    </div>
                </div>
                <div className="content_bottom">
                    <div className="heading">
                        <h3>Feature Products</h3>
                    </div>
                    <div className="see">
                        <p><a href="#">See all Products</a></p>
                    </div>
                    <div className="clear" />
                </div>
                <div className="section group">
                    <div className="grid_1_of_4 images_1_of_4">
                        <a href="preview.html"><img src="/asserts/images/new-pic1.jpg" alt="" /></a>
                        <h2>Lorem Ipsum is simply </h2>
                        <div className="price-details">
                            <div className="price-number">
                                <p><span className="rupees">$849.99</span></p>
                            </div>
                            <div className="add-cart">
                                <h4><a href="preview.html">Add to Cart</a></h4>
                            </div>
                            <div className="clear" />
                        </div>
                    </div>
                    <div className="grid_1_of_4 images_1_of_4">
                        <a href="preview.html"><img src="/asserts/images/new-pic2.jpg" alt="" /></a>
                        <h2>Lorem Ipsum is simply </h2>
                        <div className="price-details">
                            <div className="price-number">
                                <p><span className="rupees">$599.99</span></p>
                            </div>
                            <div className="add-cart">
                                <h4><a href="preview.html">Add to Cart</a></h4>
                            </div>
                            <div className="clear" />
                        </div>
                    </div>
                    <div className="grid_1_of_4 images_1_of_4">
                        <a href="preview.html"><img src="/asserts/images/new-pic4.jpg" alt="" /></a>
                        <h2>Lorem Ipsum is simply </h2>
                        <div className="price-details">
                            <div className="price-number">
                                <p><span className="rupees">$799.99</span></p>
                            </div>
                            <div className="add-cart">
                                <h4><a href="preview.html">Add to Cart</a></h4>
                            </div>
                            <div className="clear" />
                        </div>
                    </div>
                    <div className="grid_1_of_4 images_1_of_4">
                        <a href="preview.html"><img src="/asserts/images/new-pic3.jpg" alt="" /></a>
                        <h2>Lorem Ipsum is simply </h2>
                        <div className="price-details">
                            <div className="price-number">
                                <p><span className="rupees">$899.99</span></p>
                            </div>
                            <div className="add-cart">
                                <h4><a href="preview.html">Add to Cart</a></h4>
                            </div>
                            <div className="clear" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default home;