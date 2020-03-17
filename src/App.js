import React, {useState, useEffect} from 'react';
import './App.css';
import DataList from './DataList';

const App = function() {
  const[loading, setLoading] = useState(true);
  const[deaths, setDeaths] = useState(null);
  const[confirmed, setConfirmed] = useState(null);
  const[recovered, setRecovered] = useState(null);

  /**useEffect executes once the component has been rendered 
   * second argument are variables to watch for changes.
   * if empty array only will be rendered once. We must
   * avoid using async callback on first argument.
  */
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://enrichman.github.io/covid19/world/full.json');
        const data = await response.json();
        setDeaths(data.deaths);
        setConfirmed(data.confirmed);
        setRecovered(data.recovered);
        setLoading(false);
      } catch(e) {
        console.log(e);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (<div>Loading today's data...</div>);
  } else {
    return(
      <>
      <DataList 
        deaths={deaths} 
        confirmed={confirmed} 
        recovered={recovered}/>
      </>
    );
  }
}

export default App;
