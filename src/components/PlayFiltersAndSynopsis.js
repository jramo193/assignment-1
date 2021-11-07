import React, { useState, useRef }  from "react";
import './PlayFiltersAndSynopsis.css';

const PlayFiltersAndSynopsis = props => {

  const[title, setTitle] = useState('');
  const[before, setBefore] = useState('');
  const[after, setAfter] = useState('');
  const[yearBefore, setYearBefore] = useState('');
  const[yearAfter, setYearAfter] = useState('');
  const[genre, setGenre] = useState('');
  const[selectedPlay, setSelectedPlay] = useState();
  const refB = useRef();
  const refA = useRef();

  const handleTitle = (e) => {
    setTitle(e);
  }

  const handleGenre = (e) => {
    setGenre(e);
  }

  const handleBefore = (e) => {
    if(e.checked) {
      setBefore(true);
    } else {
      setBefore(false);
    }
  }

  const handleAfter = (e) => {
    if(e.checked) {
      setAfter(true);
    } else {
      setAfter(false);
    }
  }

  const handleYearBefore = (e) => {
    setYearBefore(e);
  }

  const handleYearAfter = (e) => {
    setYearAfter(e);
  }

  const handleCloseClick = () => {
    props.handleDisplayChoice(true);
  }


  const handleClear = () => {
    setTitle('');
    setGenre('');
    refB.current.checked = false;
    refA.current.checked = false;
    setYearBefore('');
    setYearAfter('');
    props.handleTitleChange('');
    props.handleGenreChange('');
    props.handleBeforeChange('');
    props.handleAfterChange('');
    props.handleYearBeforeChange('');
    props.handleYearAfterChange('');
    props.handleDisplayAllOrMatch(false);
  }

  const handleFilter = () => {
    props.handleTitleChange(title);
    props.handleGenreChange(genre);
    props.handleBeforeChange(before);
    props.handleAfterChange(after);
    props.handleYearBeforeChange(yearBefore);
    props.handleYearAfterChange(yearAfter);

  }

  const handleFavoritesClick = () => {
    props.handleFavoritesClick(props.selectedPlay);
  }

  //renders the play filters
  const renderPlayFilters = () => {
    return (
      <div>

        <div>
          <h1 className='playfilters-header'>Play Filters</h1>
        </div>

        <div>
          <form className='titleform'>
            <label className='filter-label'>Title: </label>
            <input className='title-texts' value={title} onChange={ e => handleTitle(e.target.value)} type="text"></input>
          </form>
        </div>

          <form className='yearform'>
            <label className='filter-label'>Year: </label>
            <div className='before'>
            <input type="checkbox" value={before} ref={refB} onChange={ e => handleBefore(e.target) }></input>
            <label > Before </label>
            <input className='before-text' type="number" value={yearBefore} onChange={ e => handleYearBefore(e.target.value) }></input>
            </div>
            <div className='after'>
            <input type="checkbox" value={after} ref={refA} onChange={ e => handleAfter(e.target) }></input>
            <label > After </label>
            <input className='after-text' type="number" value={yearAfter} onChange={ e => handleYearAfter(e.target.value) }></input>
            </div>
          </form>

          <form className='genreform'>
            <label className='filter-label'>Genre:</label>
            <select className='genre-dropdown' value={genre} onChange={ e => handleGenre(e.target.value)} >
                <option value=''>--Please choose an option--</option>
                <option value='comedy'>Comedy</option>
                <option value='tragedy'>Tragedy</option>
                <option value='history'>History</option>
            </select>
          </form>

          <div className='filterbuttons'>
            <button className='filterbuttons-filter' onClick={handleFilter} >Filter</button>
            <button className='filterbuttons-clear' onClick={handleClear} >Clear</button>
          </div>

      </div>

    );
  }

  //renders the play synopsis when a title or VIEW is clicked
  const renderSynopsis = () => {
    return (
      <div>
        <h1 className='synopsis-title'>{props.selectedPlay.title}</h1>
        <div className='synopsis-details'>{props.selectedPlay.synopsis}</div>
        <div className='filterbuttons'>
        <button className='synopsis-close'onClick={ handleCloseClick }>Close</button>
        <button className='synopsis-favorite' onClick={ handleFavoritesClick } style={{color: "red", cursor: "pointer"}}>❤</button>
        </div>
      </div>

    );
  }

  if(props.display) {
    return renderPlayFilters();
  } else {
    return renderSynopsis();
  }

}
export default PlayFiltersAndSynopsis
