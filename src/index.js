import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import Root from './Root'

const store = createStore(rootReducer)
const root = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  root
)
