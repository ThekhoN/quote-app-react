import {createStore} from 'redux'
import {syncHistoryWithStore} from 'react-router-redux'
import {browserHistory} from 'react-router'

import rootReducer from '../reducer/rootReducer'
import quotes from '../data/quotes'

const defaultState = {
  quotes
}

const store = createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store

export const history = syncHistoryWithStore(browserHistory, store)
