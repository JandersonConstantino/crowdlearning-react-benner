import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import React, { Component } from 'react'
import Menu from '../template/menu'
import Routes from './router'

export default props => (
    <div>
        <Menu />
        <Routes />
    </div>
)