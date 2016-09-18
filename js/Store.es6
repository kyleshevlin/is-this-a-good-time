const { createStore } = require('redux')
const { connect } = require('react-redux')

const initialState = {
  goodTime: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_GOOD_TIME':
      return Object.assign({}, state, { goodTime: !state.goodTime })
    case 'TIME_IS_GOOD':
      return Object.assign({}, state, { goodTime: true })
    case 'TIME_IS_BAD':
      return Object.assign({}, state, { goodTime: false })
    default:
      return state
  }
}

const store = createStore(reducer, initialState)

const mapStateToProps = (state) => {
  return {
    goodTime: state.goodTime
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleGoodTime () {
      dispatch({
        type: 'TOGGLE_GOOD_TIME'
      })
    },

    timeIsGood () {
      dispatch({
        type: 'TIME_IS_GOOD'
      })
    },

    timeIsBad () {
      dispatch({
        type: 'TIME_IS_BAD'
      })
    }
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

module.exports = { store, connector }
