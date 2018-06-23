import {
  NUMBER,
  OPERATOR,
  CLEAR_ALL,
  CLEAR_LAST,
  BACKSPACE,
  EQUALS,
  DECIMAL,
  NEGATE,
  NULL
} from './types'

var answer = null
var equalsWasLastPress = false
var decimalBlock = false

export const numberPressed = number => {
  if (answer && equalsWasLastPress) {
    answer = null
    equalsWasLastPress = false
    return { type: NUMBER, payload: { number, reset: true } }
  } else {
    return { type: NUMBER, payload: { number } }
  }
}

export const operatorPressed = operator => {
  decimalBlock = false
  equalsWasLastPress = false
  let payload = answer ? [`${answer}`, ' ', `${operator}`, ' '] : `${operator}`
  answer = null
  return { type: OPERATOR, payload }
}

export const mainPressed = main => {
  equalsWasLastPress = false
  switch (main) {
    case 'C':
      answer = null
      decimalBlock = false
      return { type: CLEAR_ALL }
    case 'CE':
      decimalBlock = false
      return { type: CLEAR_LAST, payload: answer }
    case 'BS':
      return { type: BACKSPACE }
    default:
      return { type: NULL }
  }
}

export const equalsPressed = math => {
  if (!equalsWasLastPress) {
    decimalBlock = false
    equalsWasLastPress = true
    answer = eval(math.join(''))
    return { type: EQUALS, payload: answer }
  } else {
    return { type: NULL }
  }
}

export const decimalPressed = () => {
  if (!decimalBlock) {
    if (answer && equalsWasLastPress) {
      equalsWasLastPress = false
      answer = null
      decimalBlock = true
      return { type: DECIMAL, payload: true }
    } else {
      decimalBlock = true
      return { type: DECIMAL }
    }
  } else {
    return { type: NULL }
  }
}

export const negatePressed = () => {
  return { type: NEGATE }
}
