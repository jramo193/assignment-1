import React, { useState }  from "react";
import { Link } from 'react-router-dom';
import './Home.css';

const Home = props => {

  const [title, setTitle] = useState('');

  const handleShowMatch = () => {
    props.handleDisplayAllOrMatch(true);
    props.handleDisplayChoice(true);
  }

  const handleShowAll = () => {
    props.handleDisplayAllOrMatch(false);
    props.handleDisplayChoice(true);
    props.handleTitleChange('');
  }

  const handleTitleChange = (e) => {
    setTitle(e);
    props.handleTitleChange(e);
  }

  //renders the home screen
  return (
     <div className="home">
       <h1 className="home-title">Play Browser</h1>
         <div>

           <form>
             <label className="title-text" for="title">Title: </label>
             <input className="title-field" value={title} onChange={ e => handleTitleChange(e.target.value) } type="text" ></input>
           </form>

           <p>
           <Link to={`/assignment-1/showlistmatch`}>
               <button className="match-button" onClick={ handleShowMatch } >Show Matching Plays</button>
           </Link>

           <Link to='/assignment-1/showlistmatch'>
               <button className="all-button" onClick={ handleShowAll }>Show All Plays</button>
           </Link>
           </p>

         </div>

     </div >
  );
};

export default Home;
