import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import * as actionCreators from '../action/actionCreators'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}

class MainComponent extends Component {
  render(){
    //console.log('this.props.quotes: ', this.props.quotes);
    return (
      <div>
        <h2>Main Component</h2>
        {
          React.cloneElement(this.props.children, this.props)
        }
      </div>
    )
  }
}

const Main = connect(mapStateToProps, mapDispatchToProps)(MainComponent)

export default Main
