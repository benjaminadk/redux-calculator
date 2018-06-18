import {
  NUMBER,
  OPERATOR,
  CLEAR_ALL,
  CLEAR_LAST,
  BACKSPACE,
  EQUALS,
  DECIMAL
} from '../actions/types'

const initialState = [0]

export const displayBottomReducer = (state = initialState, action) => {
  switch (action.type) {
    case NUMBER:
      if (
        state[state.length - 1] === ' ' ||
        (state[0] === 0 && state[1] !== '.') ||
        action.payload.reset
      ) {
        return [action.payload.number]
      } else if (state.length > 12) {
        return [...state]
      } else {
        return [...state, action.payload.number]
      }
    case DECIMAL:
      if (state === 0 || action.payload) {
        return [0, '.']
      } else {
        return [...state, '.']
      }
    case OPERATOR:
      return [0]
    case EQUALS:
      return [action.payload]
    case CLEAR_ALL:
      return [0]
    case CLEAR_LAST:
      return [0]
    case BACKSPACE:
      if (state.length === 1) {
        return [0]
      } else {
        return [...state.slice(0, state.length - 1)]
      }
    default:
      return state
  }
}
