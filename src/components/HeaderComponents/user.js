import React, { Component } from 'react';

class user extends Component {
    render() {
        return (
            <div className="headertop_desc">
              <div className="call">
                <p><span>Need help?</span> call us <span className="number">1-22-3456789</span></p>
              </div>
              <div className="account_desc">
                <ul>
                  <li><a href="#">Register</a></li>
                  <li><a href="#">Login</a></li>
                  <li><a href="#">Delivery</a></li>
                  <li><a href="#">Checkout</a></li>
                  <li><a href="#">My Account</a></li>
                </ul>
              </div>
              <div className="clear" />
            </div>
        );
    }
}

export default user;