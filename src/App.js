import React, { Component } from 'react'
import SearchForm from './SearchForm/search-form'
import SearchResult from './SearchResultList/search-result'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: undefined,
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Search Reddit</h1>
        <SearchForm setAppState={this.setState.bind(this)} />
        { this.state.results ?
        <SearchResult results={this.state.results} />
        : undefined
        }
      </div>
    )
  }
}
