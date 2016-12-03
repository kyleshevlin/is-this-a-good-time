import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
const BodyColor = require('./BodyColor')
const TimeDisplay = require('./TimeDisplay')

import '../../scss/app.scss'

const App = () => {
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

export default App
