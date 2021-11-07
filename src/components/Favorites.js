import React from "react";
import FavoriteItem from './FavoriteItem.js';
import './Favorites.css';

const Favorites = props => {

  //generates a table for the favorite items
  return (
    <div>
      <h1 className='favorites-header'>Favorites</h1>
        <table className='favorites-table'>
          <tr>
            <th className='table-favetitle-header' ></th>
            <th className='table-faveyear-header'></th>
          </tr>
          {props.favorites.map( (p, i) =>  <FavoriteItem  play={p} key={i}  handleDeleteClick={props.handleDeleteClick} handleDisplayChoice={props.handleDisplayChoice} handleSelectedPlay={props.handleSelectedPlay}/>  )}
        </table>
    </div>

  );
}

export default Favorites
