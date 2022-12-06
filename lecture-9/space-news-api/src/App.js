import React from 'react'
import SpaceNewsAPI from './SpaceNewsAPI'

const App = () => {
  return (
    <div>
      <h1>SpaceX Flights</h1>
      <SpaceNewsAPI apiKey='YOUR_API_KEY' />
    </div>
  )
}

export default App
