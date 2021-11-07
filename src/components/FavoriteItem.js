import React from "react";
import { Link } from 'react-router-dom';
import './FavoriteItem.css';

const FavoriteItem = (props) => {

  const handleDeleteClick = () => {
    props.handleDeleteClick(props.play);
  }

  const handleTitleClick = () => {
    handleSelectedPlay(props.play);
    props.handleDisplayChoice(false);
  }

  const handleSelectedPlay = (e) => {
    props.handleSelectedPlay(e);
  }

  //generates a table cell with a favorite item
  return (
      <tr>
        <td ><Link to={`/assignment-1/showlistmatch`} className="favorite-item-title" onClick={handleTitleClick} >{props.play.title} </Link></td>
        <td ><div className="delete"><button className="favorite-item-delete" onClick={handleDeleteClick}>DEL</button></div></td>
      </tr>
  );
}

export default FavoriteItem;
