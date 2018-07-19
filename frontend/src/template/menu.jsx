import React, { Component } from 'react'

export default class Menu extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <nav className="navbar navbar-inverse bg-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            <i className="fa fa-address-book"></i> Clients
                        </a>
                    </div>

                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li><a href="#/clients">Clients</a></li>
                            <li><a href="#/about">About</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}