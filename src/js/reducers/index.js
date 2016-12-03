import {
  TOGGLE_GOOD_TIME,
  TIME_IS_GOOD,
  TIME_IS_BAD
} from '../actions'

const initialState = {
  goodTime: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_GOOD_TIME:
      return Object.assign({}, state, { goodTime: !state.goodTime })

    case TIME_IS_GOOD:
      return Object.assign({}, state, { goodTime: true })

    case TIME_IS_BAD:
      return Object.assign({}, state, { goodTime: false })

    default:
      return state
  }
}

export default reducer
