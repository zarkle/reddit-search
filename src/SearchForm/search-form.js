import React, { Component } from 'react'
import superagent from 'superagent'
import './search-form.css'

export default class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      quantity: 1,
      className: '',
    }

    this.submitHandler = this.submitHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }

  submitHandler(event) {
    event.preventDefault()
    superagent.get(`https://www.reddit.com/r/${this.state.search}.json?limit=${this.state.quantity}`)
    .then(response => {
      this.props.setAppState({results: response.body.data.children})
      this.setState({'className': ''})
    })
    .catch(error => this.setState({'className': 'err'})
    )
  }

  changeHandler(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <div className="search-form">
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="search"
            value={this.state.search}
            onChange={this.changeHandler}
            className={this.state.className} />

          <input
            type="number"
            name="quantity"
            min="1"
            max="100"
            value={this.state.quantity}
            onChange={this.changeHandler}
            className={this.state.className} />

          <button type="submit">Find</button>
        </form>
      </div>
    )
  }
}

