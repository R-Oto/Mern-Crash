import React from 'react'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path='/' />
        <Route path='/create' />
        <Route path='/update' />
      </Routes>
    </div>
  )
}

export default App