import React from 'react'
import { connect } from 'react-redux'
import { timeIsGood, timeIsBad } from '../actions'
import { formatTime, isGoodTime } from '../helpers/timeEvaluation'

const checkTime = ({ timeIsGood, timeIsBad }) => {
  isGoodTime() ? timeIsGood() : timeIsBad()
}

const Time = React.createClass({
  propTypes: {
    goodTime: React.PropTypes.bool,
    timeIsGood: React.PropTypes.func,
    timeIsBad: React.PropTypes.func
  },

  getInitialState () {
    return {
      time: formatTime()
    }
  },

  componentWillMount () {
    checkTime(this.props)
  },

  componentDidMount () {
    setInterval(this.tick, 15000)
  },

  componentWillUnmount () {
    clearInterval(this.tick)
  },

  tick () {
    this.setState({
      time: formatTime()
    })
    checkTime(this.props)
  },

  render () {
    let timeEvaluation = this.props.goodTime ? ' ' : ' NOT '

    return (
      <div className='time_display'>
        <p>
          It is {this.state.time} where Kyle lives. It is probably*{timeEvaluation}a good time to call.
        </p>
        <p className='fine_print'>
          *This is not a guarantee.
        </p>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    goodTime: state.goodTime
  }
}

const mapDispatchToProps = {
  timeIsGood,
  timeIsBad
}

export default connect(mapStateToProps, mapDispatchToProps)(Time)
