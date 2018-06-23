import React from 'react'

const main = ['CE', 'C', 'BS']
const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3]
const ops = ['/', '*', '-', '+']

const KeyPad = ({
  handleMainPressed,
  handleNumberPressed,
  handleOperatorPressed,
  handleEqualsPressed,
  handleDecimalPressed,
  displayTop
}) => (
  <div className="keypad">
    <div>
      <div className="mainPadContainer">
        {main.map(m => (
          <div
            key={m}
            className="pad other"
            onClick={() => handleMainPressed(m)}
          >
            {m}
          </div>
        ))}
      </div>
      <div className="numPadContainer">
        {nums.map(n => (
          <div
            key={n}
            className="pad num"
            onClick={() => handleNumberPressed(n)}
          >
            {n}
          </div>
        ))}
        <div className="pad other">&#177;</div>
        <div className="pad num" onClick={() => handleNumberPressed(0)}>
          0
        </div>
        <div className="pad other" onClick={handleDecimalPressed}>
          .
        </div>
      </div>
    </div>
    <div className="opsPadContainer">
      {ops.map(o => (
        <div
          key={o}
          className="pad other ops"
          onClick={() => handleOperatorPressed(o)}
        >
          {o}
        </div>
      ))}
      <div
        className="pad other ops"
        onClick={() => handleEqualsPressed(displayTop)}
      >
        =
      </div>
    </div>
  </div>
)

export default KeyPad
