import React from 'react';
import useFetch from '../hooks/useFetch';
import DataList from '../components/DataList'

const Spain = function() {
  const {data, loading} = useFetch('https://enrichman.github.io/covid19/world/spain/data.json');

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

export default Spain;