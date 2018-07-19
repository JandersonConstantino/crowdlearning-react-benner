import React, { Component } from 'react'
import Axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: '',
            list: []
        }

        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
    }

    componentWillMount() {
        this.refresh()
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''

        Axios.get(`${URL}?sort=-createAd${search}`)
            .then(response => {
                this.setState({...this.state, description, list: response.data})
            })
    }

    handleAdd() {
        const description = this.state.description
        Axios.post(URL, { description })
            .then( response => {
                this.refresh()
            })
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value})
    }

    handleRemove(todo) {
        Axios.delete(`${URL}/${todo._id}`)
            .then(response => {
                this.refresh(this.state.description)
            })
    }

    handleMarkAsDone(todo) {
        Axios.put(`${URL}/${todo._id}`, {...todo, done: true})
            .then(responde => this.refresh(this.state.description))
    }

    handleMarkAsPending(todo) {
        Axios.put(`${URL}/${todo._id}`, {...todo, done: false})
            .then(responde => this.refresh(this.state.description))
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleClear() {
        this.refresh()
    }

    render() {
        return (
            <div>
                <PageHeader name="Tasks" small="register" />
                <TodoForm 
                    handleAdd={this.handleAdd} 
                    description={this.state.description} 
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}
                />
                <TodoList 
                    list={this.state.list} 
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                />
            </div>
        )
    }
}