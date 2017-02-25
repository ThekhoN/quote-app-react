import React, {Component} from 'react'
import {Link} from 'react-router'

export default class QuoteGallery extends Component {
  render(){
    const {quotes} = this.props
    return (
      <div>
        <h3> QuoteGallery Component </h3>
        {
          quotes.map(quote => (<li key={quote.id}>
            <Link to={`/quote/${quote.id}`}>
              {quote.text}
            </Link>
          </li>))
        }
      </div>
    )
  }
}
