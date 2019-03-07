import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './NavBar/NavBar.js';

import About from './About/About.js';
import Bubbles from './Bubbles/Bubbles.js';
import Bundles from './Bundles/Bundles.js';
import Cart from './Cart/Cart.js';

class App extends React.Component {
    render() {
        return(
            <div>
                <NavBar />

                <Switch>
                    <Route exact path="/" />
                    <Route exact path="/about" component = { About } />
                    <Route exact path="/bubbles" component = { Bubbles } />
                    <Route exact path="/bundles" component = { Bundles } />
                    <Route exact path="/cart" component = { Cart } />
                </Switch>
            </div>
        );
    };
};

export default App;
