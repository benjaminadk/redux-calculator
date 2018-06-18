import { combineReducers } from 'redux'
import { displayTopReducer } from './displayTop'
import { displayBottomReducer } from './displayBottom'

export default combineReducers({
  displayTop: displayTopReducer,
  displayBottom: displayBottomReducer
})
