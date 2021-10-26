import React from 'react';
import Home from '../components/BodyComponents/home';
import About from '../components/BodyComponents/about';
import Contact from '../components/BodyComponents/contact';
import Products from '../components/BodyComponents/products';
import News from '../components/BodyComponents/news';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/about',
        exact: false,
        main: () => <About />
    },
    {
        path: '/contact',
        exact: false,
        main: () => <Contact />
    },
    {
        path: '/products',
        exact: false,
        main: ({ match, location }) => <Products match={match} location={location} />
    },
    {
        path: '/news',
        exact: false,
        main: () => <News />
    }
];

export default routes;