import React from 'react'

class MyComponent extends React.Component {
  state = {
    data: null,
  }

  componentDidMount() {
    // Fetch some data here and update state with the result
    this.setState({ data: 'Example data' })
  }

  render() {
    return this.props.render(this.state.data)
  }
}

class App extends React.Component {
  render() {
    return (
      <MyComponent
        render={(data) => <div>{data ? <p>{data}</p> : <p>Loading...</p>}</div>}
      />
    )
  }
}

export default App
