import React, { Component } from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default class TodoForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const keyHandler = (e) => {
            if(e.key === 'Enter') {
                e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
            } else if (e.key === 'Escape') {
                this.props.handleClear()
            }
        }

        return (
            <div role="form" className="todo-form">
                <Grid cols="12 9 10">
                    <input id="description" className="form-control" placeholder="Add a task" 
                        value={this.props.description} 
                        onKeyUp={ keyHandler }
                        onChange={ e => this.props.handleChange(e)}/>
                </Grid>

                <Grid cols="12 3 2">
                    <IconButton style="primary" icon="plus" onClick={this.props.handleAdd} />
                    <IconButton style="info" icon="search" onClick={this.props.handleSearch} />
                    <IconButton style="default" icon="close" onClick={this.props.handleClear} />
                </Grid>
            </div>
        )
    }
}