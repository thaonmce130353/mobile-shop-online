import React, { Component } from 'react';

class slider extends Component {
    render() {
        return (
            <div className="slider">
                <div id="slider">
                    <div id="mover">
                        <div id="slide-1" className="slide">
                            <div className="slider-img">
                                <a href="preview.html"><img src="/asserts/images/slide-1-image.png" alt="learn more" /></a>
                            </div>
                            <div className="slider-text">
                                <h1>Clearance<br /><span>SALE</span></h1>
                                <h2>UPTo 20% OFF</h2>
                                <div className="features_list">
                                    <h4>Get to Know More About Our Memorable Services Lorem Ipsum is simply dummy text</h4>
                                </div>
                                <a href="preview.html" className="button">Shop Now</a>
                            </div>
                            <div className="clear" />
                        </div>
                        <div className="slide">
                            <div className="slider-text">
                                <h1>Clearance<br /><span>SALE</span></h1>
                                <h2>UPTo 40% OFF</h2>
                                <div className="features_list">
                                    <h4>Get to Know More About Our Memorable Services</h4>
                                </div>
                                <a href="preview.html" className="button">Shop Now</a>
                            </div>
                            <div className="slider-img">
                                <a href="preview.html"><img src="/asserts/images/slide-3-image.jpg" alt="learn more" /></a>
                            </div>
                            <div className="clear" />
                        </div>
                        <div className="slide">
                            <div className="slider-img">
                                <a href="preview.html"><img src="/asserts/images/slide-2-image.jpg" alt="learn more" /></a>
                            </div>
                            <div className="slider-text">
                                <h1>Clearance<br /><span>SALE</span></h1>
                                <h2>UPTo 10% OFF</h2>
                                <div className="features_list">
                                    <h4>Get to Know More About Our Memorable Services Lorem Ipsum is simply dummy text</h4>
                                </div>
                                <a href="preview.html" className="button">Shop Now</a>
                            </div>
                            <div className="clear" />
                        </div>
                    </div>
                </div>
                <div className="clear" />
            </div>
        );
    }
}

export default slider;