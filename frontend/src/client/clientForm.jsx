import React, { Component } from 'react'
import Grid from '../template/grid'
import { If } from '../helper/utils'
import IconButton from '../template/iconButton'

export default class ClientForm extends Component {
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
            <div role="form" className="client-form form">
                <Grid cols="10 6 8">
                    <div className="form-group">
                        <label>Name</label>
                        <input id="name" className="form-control" placeholder="Name" 
                        />
                    </div>

                    <div className="form-group">
                        <label>CPF</label>
                        <input id="cpf" className="form-control" placeholder="CPF" 
                        />
                    </div>

                    <If test={true}>
                        <div className="form-group">
                            <label>RG</label>
                            <input id="rg" className="form-control" placeholder="RG" 
                            />
                        </div>
                    </If>

                    <div className="form-group">
                        <label>Date of Birth</label>
                        <input id="dateofbirth" className="form-control" type="date" placeholder="dateofbirth" 
                        />
                    </div>

                    <div className="form-group">
                        <IconButton 
                            style="success" icon="plus" value=" New"
                            onClick={() => this.props.handleClear()}
                        />
                    </div>
                </Grid>
            </div>  
        )
    }
}