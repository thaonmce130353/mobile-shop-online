import React, { Component } from 'react';

class cart extends Component {
    render() {
        return (
            <div className="header_top">
                <div className="logo">
                    <a href="index.html"><img src="/asserts/images/logo.png" alt="" /></a>
                </div>
                <div className="cart">
                    <p>Welcome to our Online Store! <span>Cart:</span></p><div id="dd" className="wrapper-dropdown-2"> 0 item(s) - $0.00
                        <ul className="dropdown">
                            <li>you have no items in your Shopping cart</li>
                        </ul></div><p />
                </div>
                <div className="clear" />
            </div>
        );
    }
}

export default cart;