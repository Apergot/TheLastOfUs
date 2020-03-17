import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    count: 10
  };

  handleInput = event => {
    const value = event.target.value;
    this.setState({count: value});
  }

  componentDidMount(){
    console.log('Hey, i mounted');
  }

  render(){
    return (
      <>
        <div>The counter value is {this.state.count}</div>
        <input type="text" value={this.state.count} onChange={this.handleInput}></input>
      </>
    )
  }

}

export default App;
