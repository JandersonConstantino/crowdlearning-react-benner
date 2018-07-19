import React, { Component } from 'react'

export class If extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        if(this.props.test) {
            return this.props.children
        }

        return false
    }
}