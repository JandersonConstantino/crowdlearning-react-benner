import React, { Component } from 'react'
import Axios from 'axios'
import Moment from 'moment'

import ClientList from './clientList'
import PageHeader from '../template/pageHeader'
import IconButton from '../template/iconButton'
import Grid from '../template/grid'
import { If } from '../helper/utils'

const URL = `http://localhost:3003/api`

export default class Client extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            client: {
                name: '',
                cpf: '',
                rg: '',
                datetimeregister: 0,
                dateofbirth: 0
            }
        }

        this.handleDeleteClient = this.handleDeleteClient.bind(this)
        this.handleEditClient = this.handleEditClient.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentWillMount() {
        this.refresh()
    }

    refresh(filter = '') {
        Axios.get(`${URL}/clients`)
            .then( response => {
                this.setState({ ...this.state, list: response.data })
            })
    }

    handleDeleteClient(client) {
        if (confirm(`Do you would like to remove the client ${client.name}?`)) 
            Axios.delete(`${URL}/clients/${client._id}`)
                .then( response => { 
                    this.refresh()
                })
    }

    handleEditClient(client) {
        this.setState({
            ...this.state,
            client
        })

        document.getElementById("dateofbirth").value = Moment(client.dateofbirth).format("YYYY-MM-DD")
    }

    handleClear() {
        this.setState({
            ...this.state,
            client: {
                name: '',
                cpf: '',
                rg: '',
                datetimeregister: 0,
                dateofbirth: 0
            }
        })
        document.getElementById("dateofbirth").value = ""
    }

    handleChange(key, e) {
        var stateObj = Object.assign({}, this.state.client); 
        stateObj[key] = e.target.value;
        this.setState({
            ...this.state, 
            client: stateObj 
        });
    }

    handleAdd() {
        Axios.post(`${URL}/clients`, this.state.client)
            .then(reponse => {
                this.refresh()
            })
    }

    handleUpdate() {
        var obj = {...this.state.client}
        obj.dateofbirth = document.getElementById("dateofbirth").value
        
        Axios.put(`${URL}/clients/${obj._id}`, obj)
            .then(response => {
                this.refresh()
            })
    }

    render() {
        return (
            <div>
                <PageHeader name="Clients" small="register" />
                <div className="row">
                    <div role="form" className="client-form form">
                        <Grid cols="10 6 8">
                            <div className="form-group">
                                <label>Registration Date</label>
                                <input id="name" 
                                    className="form-control" 
                                    type="datetime"
                                    disabled
                                    onChange={(e) => this.handleChange('datetimeregister', e)}
                                    value={this.state.client.datetimeregister != 0 ? 
                                        Moment(this.state.client.datetimeregister).format("MM/DD/YYYY hh:mm:ss") : ''}
                                />
                            </div>

                            <div className="form-group">
                                <label>Name</label>
                                <input id="name" 
                                    className="form-control" 
                                    placeholder="Name" 
                                    onChange={(e) => this.handleChange('name', e)}
                                    value={this.state.client.name}
                                />
                            </div>

                            <div className="form-group">
                                <label>CPF</label>
                                <input id="cpf" 
                                    className="form-control" 
                                    placeholder="CPF" 
                                    onChange={(e) => this.handleChange('cpf', e)}
                                    value={this.state.client.cpf}
                                />
                            </div>

                            <If test={true}>
                                <div className="form-group">
                                    <label>RG</label>
                                    <input id="rg" 
                                        className="form-control" 
                                        placeholder="RG"
                                        onChange={(e) => this.handleChange('rg', e)}
                                        value={this.state.client.rg}
                                    />
                                </div>
                            </If>

                            <div className="form-group">
                                <label>Date of Birth</label>
                                <input id="dateofbirth" 
                                    className="form-control" 
                                    type="date" 
                                    placeholder="dateofbirth" 
                                    onChange={(e) => this.handleChange('dateofbirth', e)}
                                    value={this.state.dateofbirth}
                                />
                            </div>

                            <div className="form-group">
                                <IconButton 
                                    style="primary" icon="plus" value=" New"
                                    onClick={() => this.handleClear()}
                                />

                                <IconButton
                                    style="success" 
                                    icon="floppy-o" 
                                    value="Save"
                                    onClick={() => {
                                        if (this.state.client.datetimeregister != 0)
                                            this.handleUpdate()
                                        else
                                            this.handleAdd()
                                    }}
                                />
                            </div>
                        </Grid>
                    </div>  
                </div>
                <ClientList list={this.state.list}
                    handleDeleteClient={this.handleDeleteClient}
                    handleEditClient={this.handleEditClient}
                />
            </div>
        )
    }
}