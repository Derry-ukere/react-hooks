import React, { Component } from 'react'

export default class CounterOneClass extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  componentDidUpdate() {
    //on update
    document.title = `you clicked ${this.state.count} times!!`
  }
  componentDidMount() {
    //on mount
    document.title = `you clicked ${this.state.count} times!!`
  }
  render() {
    return (
      <div>
        <div
          style={{
            marginLeft: '45px',
            marginTop: '50px',
            backgroundColor: 'GrayText',
          }}
        >
          <button onClick={this.handleClick}>
            click class !!to {this.state.count}change title
          </button>
        </div>
      </div>
    )
  }
}
