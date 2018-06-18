import React from 'react'

const Display = ({ displayTop, displayBottom }) => (
  <div className="displayContainer">
    <div className="displayTop">{displayTop.join('')}</div>
    <div className="displayBottom">{displayBottom.join('')}</div>
  </div>
)

export default Display
