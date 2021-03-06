import React, { Component } from 'react'
import './search-result.css'

export default class SearchResult extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="search-result">
        <ul>
          {
            this.props.results.map((topic, i) =>
              <li key={i}><a href={topic.data.url}>
                <h2>{topic.data.title}</h2>
                <p>Up-votes: {topic.data.ups}</p>
              </a></li>
            )
          }
        </ul>
      </div>
    )
  }
}

