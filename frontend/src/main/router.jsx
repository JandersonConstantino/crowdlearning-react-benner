import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Client from "../client/client"
import About from '../about/about'


export default props => (
    <Router history={hashHistory}>
        <Route path='/clients' component={Client} />
        <Route path="/about" component={About} />
        <Redirect from='*' to='/clients' />
    </Router>
)