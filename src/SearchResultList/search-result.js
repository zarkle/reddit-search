import React, { Component } from 'react'

export default class SearchResult extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="search-result">
        <ul>
          <li><a href={this.props.results.data.children[0].data.url}>
            <h2>{this.props.results.data.children[0].data.title}</h2>
            <p>{this.props.results.data.children[0].data.ups}</p>
          </a></li>
        </ul>
      </div>
    )
  }
}

