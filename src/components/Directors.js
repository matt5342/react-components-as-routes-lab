import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => {
          return(
          <div>
            <h2>Name: {director.name}</h2>
            Movies:<br></br>
            <ul>
              {director.movies.map(genre => <li>{genre}</li>)}
            </ul>

          </div>)
        })}
      {/*{code here}*/}
    </div>
  );
}

export default Directors
