import React, { Component } from 'react';
import User from '../HeaderComponents/user';
import Cart from '../HeaderComponents/cart';
import Menu from '../HeaderComponents/menu';

class index extends Component {
    render() {
        return (
            <div>
                <User />
                <Cart />
                <Menu />
            </div>
        );
    }
}

export default index;