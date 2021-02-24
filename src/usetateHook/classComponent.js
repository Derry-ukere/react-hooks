import React, { Component } from 'react'

export default class ClassComponent extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }
  handleClick = () => {
    this.setState((prev) => {
      return {
        count: prev.count + 1,
      }
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.count}</button>
      </div>
    )
  }
}
