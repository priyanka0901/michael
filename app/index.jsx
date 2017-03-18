'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute, IndexRedirect } from 'react-router';
import FormLayout from './components/home/form.jsx';
import ViewLayout from './components/home/view.jsx';
import SignIn from './components/page/signin.jsx';
import SignUp from './components/page/signup.jsx';

const Layout = React.createClass({
    render: function() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <FormLayout />
                    <ViewLayout />
                </div>
                {this.props.children}
            </div>
        );
    }
});

render((
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
  {/*  <Route path="/signin" component={SignIn} />
     <Route path="/signup" component={SignUp} />
   */}
    </Route>
  </Router>
), document.getElementById('app'));