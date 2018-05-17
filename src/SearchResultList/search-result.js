import React, { Component } from 'react'

export default class SearchResult extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="search-result">
        <ul>
          {
            this.props.results.map((topic) =>
              <li><a href={topic.data.url}>
                <h2>{topic.data.title}</h2>
                <p>{topic.data.ups}</p>
              </a></li>
            )
          }
        </ul>
      </div>
    )
  }
}

