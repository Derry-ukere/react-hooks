import React, { Component } from 'react'

export default class Timer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      timer: 0,
    }
  }
  componentDidMount() {
    let intervalFunc = () => {
      this.setState({ timer: this.state.timer + 1 })
    }
    this.interval = setInterval(intervalFunc, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  handleClick = () => clearInterval(this.interval)

  render() {
    return (
      <div>
        <div>{this.state.timer}</div>
        <div>
          <button onClick={this.handleClick}>stop</button>
        </div>
      </div>
    )
  }
}
