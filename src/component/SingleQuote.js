import React, {Component} from 'react'

export default class SingleQuote extends Component {
  render(){
      const {quotes, params} = this.props
      const currentQuote = quotes.filter(quote => quote.id === parseInt(params.quoteId, 10))[0]
      return (
        <div>
          <h3> SingleQuote Component </h3>
          <div>
            {currentQuote.text}
          </div>
        </div>
      )
  }
}
