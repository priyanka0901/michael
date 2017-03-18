'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute, IndexRedirect } from 'react-router';
import FormLayout from './components/home/form.jsx';
import { Card } from './components/home/view.jsx';

const Layout = React.createClass({
    render: function() {
        return (
            <div>
                <div className="container">
                    <FormLayout />
                    <Card />
                </div>
            </div>
        );
    }
});

render((
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
    </Route>
  </Router>
), document.getElementById('app'));