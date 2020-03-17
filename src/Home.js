import React from 'react';
import DataList from './components/DataList';
import useFetch from './hooks/useFetch';

const Home = function() {
  //Custom hook to fetch data
  const {data, loading} = useFetch('https://enrichman.github.io/covid19/world/full.json');

  if (loading) {
    return (<div>Loading today's data...</div>);
  } else {
    return(
      <DataList 
        deaths={data.deaths} 
        confirmed={data.confirmed} 
        recovered={data.recovered}
      />
    );
  }
}

export default Home;
