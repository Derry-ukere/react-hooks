import React, { Component } from 'react'

export default class SelfTimer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }
  componentDidMount() {
    this.interval = setInterval(this.tick, 10000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  tick = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
      </div>
    )
  }
}
