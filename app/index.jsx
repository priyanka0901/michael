'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute, IndexRedirect } from 'react-router';
import FormLayout from './components/home/form.jsx';
import ViewLayout from './components/home/view.jsx';

const Layout = React.createClass({
    render: function() {
        return (
            <div>
                <div className="container">
                    <FormLayout />
                    <ViewLayout />
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