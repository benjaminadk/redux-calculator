import React, { Component } from 'react'
import Display from '../components/Display'
import KeyPad from '../components/KeyPad'
import * as actions from '../actions'
import { connect } from 'react-redux'

class Calculator extends Component {
  render() {
    return (
      <div className="calculatorContainer">
        <div className="calculator">
          <Display
            displayTop={this.props.displayTop}
            displayBottom={this.props.displayBottom}
          />
          <KeyPad
            displayTop={this.props.displayTop}
            handleNumberPressed={this.props.numberPressed}
            handleOperatorPressed={this.props.operatorPressed}
            handleMainPressed={this.props.mainPressed}
            handleEqualsPressed={this.props.equalsPressed}
            handleDecimalPressed={this.props.decimalPressed}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  displayTop: state.displayTop,
  displayBottom: state.displayBottom
})

export default connect(
  mapStateToProps,
  actions
)(Calculator)
