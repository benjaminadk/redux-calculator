import {
  NUMBER,
  OPERATOR,
  EQUALS,
  CLEAR_ALL,
  CLEAR_LAST,
  BACKSPACE,
  NEGATE,
  DECIMAL
} from '../actions/types'

const numTooLong = state => {
  var count = 0
  var tooLong = false
  state.forEach(c => {
    if (Number.isInteger(parseInt(c, 10)) || c === '.') {
      count += 1
      if (count > 12) {
        tooLong = true
      }
    } else {
      count = 0
    }
  })
  return tooLong
}

const clearLastNumber = state => {
  var count = 0
  const zero = state[state.length - 1]
  if (!Number.isInteger(zero) && zero !== '.') {
    return state
  } else {
    for (let i = state.length - 1; i >= 0; i--) {
      if (!Number.isInteger(state[i]) && state[i] !== '.') {
        break
      } else {
        count += 1
      }
    }
    return state.slice(0, state.length - count)
  }
}

const intialState = []

export const displayTopReducer = (state = intialState, action) => {
  switch (action.type) {
    case NUMBER:
      if (
        action.payload.number === 0 &&
        !Number.isInteger(state[state.length - 1])
      ) {
        return [...state]
      } else if (numTooLong(state)) {
        return [...state]
      } else {
        return [...state, action.payload.number]
      }
    case DECIMAL:
      return [...state, '.']
    case OPERATOR:
      if (state[state.length - 1] === ' ') {
        return [...state.slice(0, state.length - 2), action.payload, ' ']
      } else if (action.payload.length === 4) {
        return [...action.payload]
      } else if (state.length === 0) {
        return [...state]
      } else {
        return [...state, ' ', ...action.payload, ' ']
      }
    case EQUALS:
      return []
    case CLEAR_ALL:
      return []
    case CLEAR_LAST:
      return [...clearLastNumber(state)]
    case NEGATE:
      return state
    case BACKSPACE:
      if (state.length === 1) {
        return []
      } else {
        return [...state.slice(0, state.length - 1)]
      }
    default:
      return state
  }
}
