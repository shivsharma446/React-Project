import React from 'react';
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Home from './home';
import facilities from './facilities';
import Room from './Room';
import contact from './Contact';

export default function Routerpage() {
  return (
    <div>
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/facilities' exact component={facilities} />
                <Route path="/room" exact component={Room} />
                <Route path="/contact" exact component={contact} />
            </Switch>
        </Router>
    </div>
  )
}
