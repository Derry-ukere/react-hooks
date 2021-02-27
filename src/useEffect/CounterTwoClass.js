import React, { Component } from 'react'

export default class CounterTwoClass extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      name: '',
    }
  }
  handleClick = () =>
    this.setState({
      count: this.state.count + 1,
    })
  handleInputChange = (e) => this.setState({ name: e.target.value })
  componentDidUpdate(prevState, prevProps) {
    // do something when the component mounts!!
    if (prevState.count !== this.state.count) {
      console.log('componet updated')
      document.title = `you cicked ${this.state.count}`
    }
  }
  componentDidMount() {
    // do something when component mounts
    console.log('componet mounted')
    document.title = `you cicked ${this.state.count}`
  }
  render() {
    return (
      <div
        style={{
          marginLeft: '45px',
          marginTop: '50px',
          backgroundColor: 'GrayText',
        }}
      >
        <input
          type='text'
          value={this.state.name}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleClick}>clicked {this.state.count}</button>
      </div>
    )
  }
}
