const React = require('react')
const { connector } = require('./Store')

const addGoodBodyClass = () => {
  document.body.classList.add('is-good-time')
}

const addBadBodyClass = () => {
  document.body.classList.add('is-bad-time')
}

const removeGoodBodyClass = () => {
  document.body.classList.remove('is-good-time')
}

const removeBadBodyClass = () => {
  document.body.classList.remove('is-bad-time')
}

const goodBodyClass = () => {
  removeBadBodyClass()
  addGoodBodyClass()
}

const badBodyClass = () => {
  removeGoodBodyClass()
  addBadBodyClass()
}

const BodyColor = React.createClass({
  propTypes: {
    goodTime: React.PropTypes.bool,
    children: React.PropTypes.element
  },

  componentWillMount () {
    this.props.goodTime ? goodBodyClass() : badBodyClass()
  },

  componentWillReceiveProps (nextProps) {
    nextProps.goodTime ? goodBodyClass() : badBodyClass()
  },

  componentWillUnmount () {
    document.body.classList.remove('is-good-time')
    document.body.classList.remove('is-bad-time')
  },

  render () {
    return this.props.children
  }
})

module.exports = connector(BodyColor)