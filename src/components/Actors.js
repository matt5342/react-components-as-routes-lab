import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (

    <div>
      <h1>Actors Page</h1>
      {actors.map(director => {
          return(
          <div>
            <h2>Name: {director.name}</h2>
            Movies:<br></br>
            <ul>
              {director.movies.map(genre => <li>{genre}</li>)}
            </ul>

          </div>)
        })}
    </div>
  );
};

export default Actors;
