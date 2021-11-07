import React, { useState }  from "react";
import HeaderApp from './HeaderApp.js';
import Favorites from './Favorites.js';
import PlayFiltersAndSynopsis from './PlayFiltersAndSynopsis.js';
import ListMatchesAndDetails from './ListMatchesAndDetails.js';
import './PlayBrowser.css';

const PlayBrowser = props => {

  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [before, setBefore] = useState('');
  const [after, setAfter] = useState('');
  const [yearBefore, setYearBefore] = useState('');
  const [yearAfter, setYearAfter] = useState('');
  const [selectedPlay, setSelectedPlay] = useState();

  const handleTitleChange = (e) => {
    setTitle(e);
    props.handleTitleChange(e);
  }

  const handleGenreChange = (e) => {
    setGenre(e);
  }

  const handleBeforeChange = (e) => {
    setBefore(e);
  }

  const handleAfterChange = (e) => {
    setAfter(e);
  }

  const handleYearBeforeChange = (e) => {
    setYearBefore(e);
  }

  const handleYearAfterChange = (e) => {
    setYearAfter(e);
  }

  const handleSelectedPlay = (e) => {
    setSelectedPlay(e);
  }

    //renders the header, favorites, play filter and synopsis, list matches, and details components
    return (
      <div  className = 'playbrowser-comp'>
        <div className='header-app'>
          <HeaderApp />
        </div>

        <div className='favorites-comp'>
          <Favorites  plays={props.plays} favorites={props.favorites} handleDeleteClick={props.handleDeleteClick} handleDisplayChoice={props.handleDisplayChoice} handleSelectedPlay={handleSelectedPlay}/>
        </div>

        <div className='playfiltersandsynopsis-comp'>
          <PlayFiltersAndSynopsis plays={props.plays} handleDisplayAllOrMatch={props.handleDisplayAllOrMatch} handleDisplayChoice={props.handleDisplayChoice} display={props.display} selectedPlay={selectedPlay} handleTitleChange={props.handleTitleChange} handleFavoritesClick={props.handleFavoritesClick}
            searchTextTitle={props.searchTextTitle}  handleGenreChange={handleGenreChange} genre={genre} handleBeforeChange={handleBeforeChange} before={before} handleAfterChange={handleAfterChange} after={after}
            handleYearBeforeChange={handleYearBeforeChange} yearBefore={yearBefore} handleYearAfterChange={handleYearAfterChange} yearAfter={yearAfter}/>
        </div>

        <div className='listmatchesanddetails-comp'>
          <ListMatchesAndDetails plays={props.plays} handleDisplayAllOrMatch={props.handleDisplayAllOrMatch} handleDisplayChoice={props.handleDisplayChoice} display={props.display}
            displayAllOrMatch={props.displayAllOrMatch} searchTextTitle={props.searchTextTitle} handleSelectedPlay={handleSelectedPlay} selectedPlay={selectedPlay} handleFavoritesClick={props.handleFavoritesClick}
            searchYearBefore={yearBefore} searchYearAfter={yearAfter} searchBefore={before} searchAfter={after} searchGenre={genre} />
        </div>

      </div>
    );



}

export default PlayBrowser;
