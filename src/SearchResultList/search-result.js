import React, { Component } from 'react'

export default class SearchResult extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="search-result">
        <ul>
          <li><a href="{this.props.results.topic.url}">
            <h2>{this.props.results.topic.title}</h2>
            <p>{this.props.results.topic.ups}</p>
          </a></li>
        </ul>
      </div>
    )
  }
}

