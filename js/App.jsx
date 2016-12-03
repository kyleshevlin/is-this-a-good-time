import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
const { store } = require('./Store')
const BodyColor = require('./BodyColor')
const TimeDisplay = require('./TimeDisplay')

import '../scss/app.scss'

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <BodyColor>
          <div className='root'>
            <h1>Is this a good time?</h1>
            <TimeDisplay />
          </div>
        </BodyColor>
      </Provider>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
