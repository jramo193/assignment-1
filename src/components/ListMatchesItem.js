import { Link } from 'react-router-dom';
import './ListMatchesItem.css';

const ListMatchesItem = props => {

  const handleFavoritesClick = () => {
    props.handleFavoritesClick(props.play);
  }

  const handleTitleClick = () => {
    handleSelectedPlay(props.play);
    props.handleDisplayChoice(false);
  }

  const handleSelectedPlay = (e) => {
    props.handleSelectedPlay(e);
  }

  //generates a play list item
  return (
      <tr>
        <td ><Link to={`/assignment-1/showlistmatch`} className="list-item-title" onClick={handleTitleClick} >{props.play.title}</Link></td>
        <td ><div className="list-item-date">{props.play.likelyDate}</div></td>
        <td ><button className="list-item-heart" onClick={ handleFavoritesClick } style={{color: "red", cursor: "pointer"}}>❤</button></td>
        <td ><Link to={`/assignment-1/showlistmatch`} onClick={handleTitleClick} ><button className="list-item-view" style={{cursor: "pointer"}}>VIEW</button></Link></td>
      </tr>

  );

}

export default ListMatchesItem;
