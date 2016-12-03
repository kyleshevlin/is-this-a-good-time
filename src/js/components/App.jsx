import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import BodyColor from './BodyColor'
import TimeDisplay from './TimeDisplay'

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
