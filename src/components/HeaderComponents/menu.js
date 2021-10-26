import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Search from './search';

const menus = [
  {
    id: 1,
    name: 'HOME',
    to: '/',
    exact: true
  },
  {
    id: 2,
    name: 'PRODUCTS',
    to: '/products',
    exact: false
  },
  {
    id: 3,
    name: 'NEWS',
    to: '/news',
    exact: false
  },
  {
    id: 4,
    name: 'ABOUT',
    to: '/about',
    exact: false
  },
  {
    id: 5,
    name: 'CONTACT',
    to: '/contact',
    exact: false
  }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
      var active = match ? 'active' : '';
      return (
        <li className={active}>
          <Link to={to}>{label}</Link>
        </li>
      )
    }} />
  )
}
class menu extends Component {
  render() {
    return (
      <div className="header_bottom">
        <div className="menu">
          <ul>
            {this.showMenu(menus)}
          </ul>
        </div>
        <Search />
        <div className="clear" />
      </div>
    );
  }

  showMenu = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={menu.id}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        )
      });
    }
    return result;
  }
}

export default menu;