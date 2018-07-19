import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Client from "../client/client"

export default props => (
    <Router history={hashHistory}>
        <Route path='/clients' component={Client} />
        <Redirect from='*' to='/clients' />
    </Router>
)