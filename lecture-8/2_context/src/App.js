import React, { createContext, useContext, useState } from 'react'

const MyContext = createContext('default value')

function App() {
  const [value, setValue] = useState('Hello World')

  const changeValue = (newValue) => {
    setValue(newValue)
  }

  return (
    <MyContext.Provider value={{ value, changeValue }}>
      <ChildComponent />
    </MyContext.Provider>
  )
}

const ChildComponent = (props) => {
  const { value, changeValue } = useContext(MyContext)

  return (
    <>
      <p>The current value is '{value}'</p>
      <button onClick={() => changeValue('Eattheblocks Web2 bootcamp')}>
        Click me to change the value!
      </button>
    </>
  )
}

export default App
