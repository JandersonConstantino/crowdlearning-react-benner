import React, { Component } from 'react'
import IconButon from '../template/iconButton'
import Moment from 'moment'

export default class ClientList extends Component {
    constructor(props) {
        super(props)
    }

    renderRows() {
        const list = this.props.list

        return list.map( row => {
            return (
                <tr key={row._id}>
                    <td>{row.name}</td>
                    <td>{row.cpf}</td>
                    <td>{row.rg}</td>
                    <td>{Moment(row.dateofbirth).format("MM/DD/YYYY")}</td>
                    <td>{Moment(row.datetimeregister).format("MM/DD/YYYY hh:mm:ss")}</td>
                    <td>
                        <IconButon icon="pencil" style="warning" onClick={() => this.props.handleEditClient(row)} />
                        <IconButon icon="trash" style="danger" onClick={() => this.props.handleDeleteClient(row)}/>
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
                        <th>Name</th>
                        <th>CPF</th>
                        <th>RG</th>
                        <th>Date of Birth</th>
                        <th>Registration Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }
}