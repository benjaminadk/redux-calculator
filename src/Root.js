import React, { Component } from 'react'
import Calculator from './containers/Calculator'
import Info from './containers/Info'
import './styles/styles.css'

class Root extends Component {
  render() {
    return (
      <div className="root">
        <Info />
        <Calculator />
      </div>
    )
  }
}

export default Root
