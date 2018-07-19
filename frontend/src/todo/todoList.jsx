import React, { Component } from 'react'
import IconButon from '../template/iconButton'

export default class TodoList extends Component {
    constructor(props) {
        super(props)
    }

    renderRows() {
        const list = this.props.list
        return list.map(_row => {
            return (
                <tr key={_row._id}>
                    <td className={_row.done ? 'markedAsDone' : ''}>{_row.description}</td>
                    <td>  
                        <IconButon style="success" icon="check" onClick={() => this.props.handleMarkAsDone(_row)} hide={_row.done}/>
                        <IconButon style="warning" icon="undo" onClick={() => this.props.handleMarkAsPending(_row)} hide={!_row.done}/>
                        <IconButon style="danger" icon="trash-o" onClick={() => this.props.handleRemove(_row)} hide={!_row.done}/>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th className="table-actions">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }
}