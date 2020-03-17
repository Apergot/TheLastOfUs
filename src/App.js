import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    deaths: null,
    confirmed: null, 
    recovered: null,
    loading: true
  };

  async componentDidMount(){
    try {
      const response = await fetch('https://enrichman.github.io/covid19/world/full.json');
      const data = await response.json();
      this.setState({
        deaths: data.deaths,
        confirmed: data.confirmed,
        recovered: data.recovered,
        loading:false
      });
    } catch(e) {
      console.log(e);
    }
  }

  render(){
    if (this.state.loading) {
      return (<div>Loading today's data...</div>);
    } else {
      return(
        <div>
          <ul>
            <li>Number of deaths: {this.state.deaths}</li>
            <li>Number of confirmed: {this.state.confirmed}</li>
            <li>Number of recovered: {this.state.recovered}</li>
          </ul>
        </div>
      );
    }
  }

}

export default App;
