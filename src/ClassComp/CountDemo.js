import React from "react";

class CountDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }
  
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}

export default CountDemo;