import React, { Component } from 'react'

export default class ClassMouse extends Component {
  constructor() {
    super()
    this.state = {
      x: 0,
      y: 0,
    }
  }
  logPostion = (e) => this.setState({ x: e.clientX, y: e.clientY })
  componentDidMount() {
    // do something
    console.log('mounted!!')
    window.addEventListener('mousemove', this.logPostion)
  }

  render() {
    return (
      <div>
        X : {this.state.x} Y:{this.state.y}
      </div>
    )
  }
}
