import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'

export default class About extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <PageHeader name="About" small="about this project" />
                <h2>Benner <small>#SimplesAssim</small></h2>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
        )
    }
}