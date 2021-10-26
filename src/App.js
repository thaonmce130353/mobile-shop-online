import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Routes from './routes/routes';
import Header from './components/HeaderComponents/index';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="wrap">
            <div className="header">
              <Header />
            </div>
            <div className="main">
              <div className="content">
                <Switch>
                  {this.showContentMenu(Routes)}
                </Switch>
              </div>
            </div>
          </div>
          <Footer />
          <a href="#" id="toTop"><span id="toTopHover"> </span></a>
        </div>
      </Router>
    );
  }

  showContentMenu = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        )
      })
    }
    return result;
  }
}

export default App;
