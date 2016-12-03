const React = require('react')
const SetIntervalMixin = require('./SetIntervalMixin')
const { formatTime, isGoodTime } = require('./TimeEvaluation')
const { connector } = require('./Store')

const checkTime = (props) => {
  const { timeIsGood, timeIsBad } = props
  isGoodTime() ? timeIsGood() : timeIsBad()
}

const Time = React.createClass({
  propTypes: {
    goodTime: React.PropTypes.bool,
    timeIsGood: React.PropTypes.func,
    timeIsBad: React.PropTypes.func
  },

  mixins: [SetIntervalMixin],

  getInitialState () {
    return {
      time: formatTime()
    }
  },

  componentWillMount () {
    checkTime(this.props)
  },

  componentDidMount () {
    this.setInterval(this.tick, 15000)
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

module.exports = connector(Time)
