import React, { useState }  from "react";
import ListMatchesItem from './ListMatchesItem.js';
import './ListMatchesAndDetails.css';

const ListMatchesAndDetails = (props) => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  //renders the play list when a search text is entered on the home screen and show matching plays is clicked, else section renders when show all plays is clicked
  const renderListMatches = () => {
    if(props.displayAllOrMatch) {
        if(props.searchTextTitle && (props.searchBefore && props.searchYearBefore) && (props.searchAfter && props.searchYearAfter) && props.searchGenre ) {
          return (
            <div >
              <h1 className='listmatches-header'>List/Matches</h1>
              <table className='item-table'>
                <tr>
                  <th className='table-title-header' >Title</th>
                  <th className='table-year-header'>Year</th>
                  <th> </th>
                  <th> </th>
                </tr>
              {props.plays
                .filter( play => play.title.toLowerCase().includes(props.searchTextTitle.toLowerCase())  )
                .filter( play => play.genre.toLowerCase().includes(props.searchGenre.toLowerCase()) )
                .filter( play => play.likelyDate <= props.searchYearBefore )
                .filter( play => play.likelyDate >= props.searchYearAfter )
                .map( (play, i) => ( <ListMatchesItem play={play} key={i} handleDisplayChoice={props.handleDisplayChoice}
                  handleSelectedPlay={props.handleSelectedPlay} displayAllOrMatch={props.displayAllOrMatch} handleFavoritesClick={props.handleFavoritesClick} /> ) )}
                  </table>
            </div>
          );
        } else if(props.searchTextTitle && (props.searchBefore && props.searchYearBefore) && (props.searchAfter && props.searchYearAfter) ) {
          return (
            <div >
              <h1 className='listmatches-header'>List/Matches</h1>
              <table className='item-table'>
                <tr>
                  <th className='table-title-header' >Title</th>
                  <th className='table-year-header'>Year</th>
                  <th> </th>
                  <th> </th>
                </tr>
              {props.plays
                .filter( play => play.title.toLowerCase().includes(props.searchTextTitle.toLowerCase())  )
                .filter( play => play.likelyDate <= props.searchYearBefore )
                .filter( play => play.likelyDate >= props.searchYearAfter )
                .map( (play, i) => ( <ListMatchesItem play={play} key={i} handleDisplayChoice={props.handleDisplayChoice}
                  handleSelectedPlay={props.handleSelectedPlay} displayAllOrMatch={props.displayAllOrMatch} handleFavoritesClick={props.handleFavoritesClick}/> ) )}
                  </table>
            </div>
          );
        } else if(props.searchTextTitle && (props.searchBefore && props.searchYearBefore) && props.searchGenre  ) {
          return (
            <div >
              <h1 className='listmatches-header'>List/Matches</h1>
              <table className='item-table'>
                <tr>
                  <th className='table-title-header' >Title</th>
                  <th className='table-year-header'>Year</th>
                  <th> </th>
                  <th> </th>
                </tr>
              {props.plays
                .filter( play => play.title.toLowerCase().includes(props.searchTextTitle.toLowerCase())  )
                .filter( play => play.genre.toLowerCase().includes(props.searchGenre.toLowerCase()) )
                .filter( play => play.likelyDate < props.searchYearBefore )
                .map( (play, i) => ( <ListMatchesItem play={play} key={i} handleDisplayChoice={props.handleDisplayChoice}
                  handleSelectedPlay={props.handleSelectedPlay} displayAllOrMatch={props.displayAllOrMatch} handleFavoritesClick={props.handleFavoritesClick}/> ) )}
                  </table>
            </div>
          );
        } else if(props.searchTextTitle && (props.searchAfter && props.searchYearAfter) && props.searchGenre  ) {
          return (
            <div >
              <h1 className='listmatches-header'>List/Matches</h1>
              <table className='item-table'>
                <tr>
                  <th className='table-title-header' >Title</th>
                  <th className='table-year-header'>Year</th>
                  <th> </th>
                  <th> </th>
                </tr>
              {props.plays
                .filter( play => play.title.toLowerCase().includes(props.searchTextTitle.toLowerCase())  )
                .filter( play => play.genre.toLowerCase().includes(props.searchGenre.toLowerCase()) )
                .filter( play => play.likelyDate > props.searchYearAfter )
                .map( (play, i) => ( <ListMatchesItem play={play} key={i} handleDisplayChoice={props.handleDisplayChoice}
                  handleSelectedPlay={props.handleSelectedPlay} displayAllOrMatch={props.displayAllOrMatch} handleFavoritesClick={props.handleFavoritesClick}/> ) )}
                  </table>
            </div>
          );
        } else if((props.searchBefore && props.searchYearBefore) && (props.searchAfter && props.searchYearAfter) && props.searchGenre ) {
          return (
            <div >
              <h1 className='listmatches-header'>List/Matches</h1>
              <table className='item-table'>
                <tr>
                  <th className='table-title-header' >Title</th>
                  <th className='table-year-header'>Year</th>
                  <th> </th>
                  <th> </th>
                </tr>
              {props.plays
                .filter( play => play.genre.toLowerCase().includes(props.searchGenre.toLowerCase()) )
                .filter( play => play.likelyDate <= props.searchYearBefore )
                .filter( play => play.likelyDate >= props.searchYearAfter )
                .map( (play, i) => ( <ListMatchesItem play={play} key={i} handleDisplayChoice={props.handleDisplayChoice}
                  handleSelectedPlay={props.handleSelectedPlay} displayAllOrMatch={props.displayAllOrMatch} handleFavoritesClick={props.handleFavoritesClick}/> ) )}
                  </table>
            </div>
          );
        } else if( props.searchTextTitle && (props.searchBefore && props.searchYearBefore) ) {
          return (
            <div >
              <h1 className='listmatches-header'>List/Matches</h1>
              <table className='item-table'>
                <tr>
                  <th className='table-title-header' >Title</th>
                  <th className='table-year-header'>Year</th>
                  <th> </th>
                  <th> </th>
                </tr>
              {props.plays
                .filter( play => play.title.toLowerCase().includes(props.searchTextTitle.toLowerCase())  )
                .filter( play => play.likelyDate < props.searchYearBefore )
                .map( (play, i) => ( <ListMatchesItem play={play} key={i} handleDisplayChoice={props.handleDisplayChoice}
                  handleSelectedPlay={props.handleSelectedPlay} displayAllOrMatch={props.displayAllOrMatch} handleFavoritesClick={props.handleFavoritesClick}/> ) )}
                  </table>
            </div>
          );
        } else if( props.searchTextTitle && (props.searchAfter && props.searchYearAfter) ) {
          return (
            <div >
              <h1 className='listmatches-header'>List/Matches</h1>
              <table className='item-table'>
                <tr>
                  <th className='table-title-header' >Title</th>
                  <th className='table-year-header'>Year</th>
                  <th> </th>
                  <th> </th>
                </tr>
              {props.plays
                .filter( play => play.title.toLowerCase().includes(props.searchTextTitle.toLowerCase())  )
                .filter( play => play.likelyDate > props.searchYearAfter )
                .map( (play, i) => ( <ListMatchesItem play={play} key={i} handleDisplayChoice={props.handleDisplayChoice}
                  handleSelectedPlay={props.handleSelectedPlay} displayAllOrMatch={props.displayAllOrMatch} handleFavoritesClick={props.handleFavoritesClick}/> ) )}
                  </table>
            </div>
          );
        } else if( props.searchTextTitle && props.searchGenre) {
          return (
            <div >
              <h1 className='listmatches-header'>List/Matches</h1>
              <table className='item-table'>
                <tr>
                  <th className='table-title-header' >Title</th>
                  <th className='table-year-header'>Year</th>
                  <th> </th>
                  <th> </th>
                </tr>
              {props.plays
                .filter( play => play.title.toLowerCase().includes(props.searchTextTitle.toLowerCase())  )
                .filter( play => play.genre.toLowerCase().includes(props.searchGenre.toLowerCase()) )
                .map( (play, i) => ( <ListMatchesItem play={play} key={i} handleDisplayChoice={props.handleDisplayChoice}
                  handleSelectedPlay={props.handleSelectedPlay} displayAllOrMatch={props.displayAllOrMatch} handleFavoritesClick={props.handleFavoritesClick}/> ) )}
                  </table>
            </div>
          );
        } else if( (props.searchBefore && props.searchYearBefore) && (props.searchAfter && props.searchYearAfter)  ) {
          return (
            <div >
              <h1 className='listmatches-header'>List/Matches</h1>
              <table className='item-table'>
                <tr>
                  <th className='table-title-header' >Title</th>
                  <th className='table-year-header'>Year</th>
                  <th> </th>
                  <th> </th>
                </tr>
              {props.plays
                .filter( play => play.likelyDate <= props.searchYearBefore )
                .filter( play => play.likelyDate >= props.searchYearAfter )
                .map( (play, i) => ( <ListMatchesItem play={play} key={i} handleDisplayChoice={props.handleDisplayChoice}
                  handleSelectedPlay={props.handleSelectedPlay} displayAllOrMatch={props.displayAllOrMatch} handleFavoritesClick={props.handleFavoritesClick}/> ) )}
                  </table>
            </div>
          );
        } else if( (props.searchBefore && props.searchYearBefore) && props.searchGenre) {
          return (
            <div >
              <h1 className='listmatches-header'>List/Matches</h1>
              <table className='item-table'>
                <tr>
                  <th className='table-title-header' >Title</th>
                  <th className='table-year-header'>Year</th>
                  <th> </th>
                  <th> </th>
                </tr>
              {props.plays
                .filter( play => play.likelyDate < props.searchYearBefore )
                .filter( play => play.genre.toLowerCase().includes(props.searchGenre.toLowerCase()) )
                .map( (play, i) => ( <ListMatchesItem play={play} key={i} handleDisplayChoice={props.handleDisplayChoice}
                  handleSelectedPlay={props.handleSelectedPlay} displayAllOrMatch={props.displayAllOrMatch} handleFavoritesClick={props.handleFavoritesClick}/> ) )}
                  </table>
            </div>
          );
        } else if( (props.searchAfter && props.searchYearAfter) && props.searchGenre) {
          return (
            <div >
              <h1 className='listmatches-header'>List/Matches</h1>
              <table className='item-table'>
                <tr>
                  <th className='table-title-header' >Title</th>
                  <th className='table-year-header'>Year</th>
                  <th> </th>
                  <th> </th>
                </tr>
              {props.plays
                .filter( play => play.likelyDate > props.searchYearAfter )
                .filter( play => play.genre.toLowerCase().includes(props.searchGenre.toLowerCase()) )
                .map( (play, i) => ( <ListMatchesItem play={play} key={i} handleDisplayChoice={props.handleDisplayChoice}
                  handleSelectedPlay={props.handleSelectedPlay} displayAllOrMatch={props.displayAllOrMatch} handleFavoritesClick={props.handleFavoritesClick}/> ) )}
                  </table>
            </div>
          );
        } else if(props.searchTextTitle && (!props.searchBefore && !props.searchYearBefore) && (!props.searchAfter && !props.searchYearAfter) && !props.searchGenre ) {
            return (
              <div >
                <h1 className='listmatches-header'>List/Matches</h1>
                <table className='item-table'>
                  <tr>
                    <th className='table-title-header' >Title</th>
                    <th className='table-year-header'>Year</th>
                    <th> </th>
                    <th> </th>
                  </tr>
                {props.plays
                  .filter( play => play.title.toLowerCase().includes(props.searchTextTitle.toLowerCase())  )
                  .map( (play, i) => ( <ListMatchesItem play={play} key={i} handleDisplayChoice={props.handleDisplayChoice}
                    handleSelectedPlay={props.handleSelectedPlay} displayAllOrMatch={props.displayAllOrMatch} handleFavoritesClick={props.handleFavoritesClick}/> ) )}
                    </table>
              </div>
            );
        } else if(props.searchGenre && !props.searchTextTitle && (!props.searchBefore && !props.searchYearBefore) && (!props.searchAfter && !props.searchYearAfter) ) {
            return (
              <div >
                <h1 className='listmatches-header'>List/Matches</h1>
                <table className='item-table'>
                  <tr>
                    <th className='table-title-header' >Title</th>
                    <th className='table-year-header'>Year</th>
                    <th> </th>
                    <th> </th>
                  </tr>
                {props.plays
                  .filter( play => play.genre.toLowerCase().includes(props.searchGenre.toLowerCase()) )
                  .map( (play, i) => ( <ListMatchesItem play={play} key={i} handleDisplayChoice={props.handleDisplayChoice}
                    handleSelectedPlay={props.handleSelectedPlay} displayAllOrMatch={props.displayAllOrMatch} handleFavoritesClick={props.handleFavoritesClick}/> ) )}
                    </table>
              </div>
            );
        } else if( (props.searchBefore && props.searchYearBefore) && !props.searchTextTitle && (!props.searchAfter && !props.searchYearAfter) && !props.searchGenre ) {
          return (
            <div >
              <h1 className='listmatches-header'>List/Matches</h1>
              <table className='item-table'>
                <tr>
                  <th className='table-title-header' >Title</th>
                  <th className='table-year-header'>Year</th>
                  <th> </th>
                  <th> </th>
                </tr>
              {props.plays
                .filter( play => play.likelyDate < props.searchYearBefore )
                .map( (play, i) => ( <ListMatchesItem play={play} key={i} handleDisplayChoice={props.handleDisplayChoice}
                  handleSelectedPlay={props.handleSelectedPlay} displayAllOrMatch={props.displayAllOrMatch} handleFavoritesClick={props.handleFavoritesClick}/> ) )}
                  </table>
            </div>
          );
        } else if( (props.searchAfter &&  props.searchYearAfter) && !props.searchTextTitle && (!props.searchBefore && !props.searchYearBefore) && !props.searchGenre ) {
          return (
            <div >
              <h1 className='listmatches-header'>List/Matches</h1>
              <table className='item-table'>
                <tr>
                  <th className='table-title-header' >Title</th>
                  <th className='table-year-header'>Year</th>
                  <th> </th>
                  <th> </th>
                </tr>
              {props.plays
                .filter( play => play.likelyDate > props.searchYearAfter )
                .map( (play, i) => ( <ListMatchesItem play={play} key={i} handleDisplayChoice={props.handleDisplayChoice}
                  handleSelectedPlay={props.handleSelectedPlay} displayAllOrMatch={props.displayAllOrMatch} handleFavoritesClick={props.handleFavoritesClick}/> ) )}
                  </table>
            </div>
          );
        }  else {
            return (
              <div >
                <h1 className='listmatches-header'>List/Matches</h1>
                NONE
              </div>
            );
        }
      }

      else {
        if(props.searchTextTitle && (props.searchBefore && props.searchYearBefore) && (props.searchAfter && props.searchYearAfter) && props.searchGenre ) {
          return (
            <div >
              <h1 className='listmatches-header'>List/Matches</h1>
              <table className='item-table'>
                <tr>
                  <th className='table-title-header' >Title</th>
                  <th className='table-year-header'>Year</th>
                  <th> </th>
                  <th> </th>
                </tr>
              {props.plays
                .filter( play => play.title.toLowerCase().includes(props.searchTextTitle.toLowerCase())  )
                .filter( play => play.genre.toLowerCase().includes(props.searchGenre.toLowerCase()) )
                .filter( play => play.likelyDate <= props.searchYearBefore )
                .filter( play => play.likelyDate >= props.searchYearAfter )
                .map( (play, i) => ( <ListMatchesItem play={play} key={i} handleDisplayChoice={props.handleDisplayChoice}
                  handleSelectedPlay={props.handleSelectedPlay} displayAllOrMatch={props.displayAllOrMatch} handleFavoritesClick={props.handleFavoritesClick} /> ) )}
                  </table>
            </div>
          );
        } else if(props.searchTextTitle && (props.searchBefore && props.searchYearBefore) && (props.searchAfter && props.searchYearAfter) ) {
          return (
            <div >
              <h1 className='listmatches-header'>List/Matches</h1>
              <table className='item-table'>
                <tr>
                  <th className='table-title-header' >Title</th>
                  <th className='table-year-header'>Year</th>
                  <th> </th>
                  <th> </th>
                </tr>
              {props.plays
                .filter( play => play.title.toLowerCase().includes(props.searchTextTitle.toLowerCase())  )
                .filter( play => play.likelyDate <= props.searchYearBefore )
                .filter( play => play.likelyDate >= props.searchYearAfter )
                .map( (play, i) => ( <ListMatchesItem play={play} key={i} handleDisplayChoice={props.handleDisplayChoice}
                  handleSelectedPlay={props.handleSelectedPlay} displayAllOrMatch={props.displayAllOrMatch} handleFavoritesClick={props.handleFavoritesClick}/> ) )}
                  </table>
            </div>
          );
        } else if(props.searchTextTitle && (props.searchBefore && props.searchYearBefore) && props.searchGenre  ) {
          return (
            <div >
              <h1 className='listmatches-header'>List/Matches</h1>
              <table className='item-table'>
                <tr>
                  <th className='table-title-header' >Title</th>
                  <th className='table-year-header'>Year</th>
                  <th> </th>
                  <th> </th>
                </tr>
              {props.plays
                .filter( play => play.title.toLowerCase().includes(props.searchTextTitle.toLowerCase())  )
                .filter( play => play.genre.toLowerCase().includes(props.searchGenre.toLowerCase()) )
                .filter( play => play.likelyDate < props.searchYearBefore )
                .map( (play, i) => ( <ListMatchesItem play={play} key={i} handleDisplayChoice={props.handleDisplayChoice}
                  handleSelectedPlay={props.handleSelectedPlay} displayAllOrMatch={props.displayAllOrMatch} handleFavoritesClick={props.handleFavoritesClick}/> ) )}
                  </table>
            </div>
          );
        } else if(props.searchTextTitle && (props.searchAfter && props.searchYearAfter) && props.searchGenre  ) {
          return (
            <div >
              <h1 className='listmatches-header'>List/Matches</h1>
              <table className='item-table'>
                <tr>
                  <th className='table-title-header' >Title</th>
                  <th className='table-year-header'>Year</th>
                  <th> </th>
                  <th> </th>
                </tr>
              {props.plays
                .filter( play => play.title.toLowerCase().includes(props.searchTextTitle.toLowerCase())  )
                .filter( play => play.genre.toLowerCase().includes(props.searchGenre.toLowerCase()) )
                .filter( play => play.likelyDate > props.searchYearAfter )
                .map( (play, i) => ( <ListMatchesItem play={play} key={i} handleDisplayChoice={props.handleDisplayChoice}
                  handleSelectedPlay={props.handleSelectedPlay} displayAllOrMatch={props.displayAllOrMatch} handleFavoritesClick={props.handleFavoritesClick}/> ) )}
                  </table>
            </div>
          );
        } else if((props.searchBefore && props.searchYearBefore) && (props.searchAfter && props.searchYearAfter) && props.searchGenre ) {
          return (
            <div >
              <h1 className='listmatches-header'>List/Matches</h1>
              <table className='item-table'>
                <tr>
                  <th className='table-title-header' >Title</th>
                  <th className='table-year-header'>Year</th>
                  <th> </th>
                  <th> </th>
                </tr>
              {props.plays
                .filter( play => play.genre.toLowerCase().includes(props.searchGenre.toLowerCase()) )
                .filter( play => play.likelyDate <= props.searchYearBefore )
                .filter( play => play.likelyDate >= props.searchYearAfter )
                .map( (play, i) => ( <ListMatchesItem play={play} key={i} handleDisplayChoice={props.handleDisplayChoice}
                  handleSelectedPlay={props.handleSelectedPlay} displayAllOrMatch={props.displayAllOrMatch} handleFavoritesClick={props.handleFavoritesClick}/> ) )}
                  </table>
            </div>
          );
        } else if( props.searchTextTitle && (props.searchBefore && props.searchYearBefore) ) {
          return (
            <div >
              <h1 className='listmatches-header'>List/Matches</h1>
              <table className='item-table'>
                <tr>
                  <th className='table-title-header' >Title</th>
                  <th className='table-year-header'>Year</th>
                  <th> </th>
                  <th> </th>
                </tr>
              {props.plays
                .filter( play => play.title.toLowerCase().includes(props.searchTextTitle.toLowerCase())  )
                .filter( play => play.likelyDate < props.searchYearBefore )
                .map( (play, i) => ( <ListMatchesItem play={play} key={i} handleDisplayChoice={props.handleDisplayChoice}
                  handleSelectedPlay={props.handleSelectedPlay} displayAllOrMatch={props.displayAllOrMatch} handleFavoritesClick={props.handleFavoritesClick}/> ) )}
                  </table>
            </div>
          );
        } else if( props.searchTextTitle && (props.searchAfter && props.searchYearAfter) ) {
          return (
            <div >
              <h1 className='listmatches-header'>List/Matches</h1>
              <table className='item-table'>
                <tr>
                  <th className='table-title-header' >Title</th>
                  <th className='table-year-header'>Year</th>
                  <th> </th>
                  <th> </th>
                </tr>
              {props.plays
                .filter( play => play.title.toLowerCase().includes(props.searchTextTitle.toLowerCase())  )
                .filter( play => play.likelyDate > props.searchYearAfter )
                .map( (play, i) => ( <ListMatchesItem play={play} key={i} handleDisplayChoice={props.handleDisplayChoice}
                  handleSelectedPlay={props.handleSelectedPlay} displayAllOrMatch={props.displayAllOrMatch} handleFavoritesClick={props.handleFavoritesClick}/> ) )}
                  </table>
            </div>
          );
        } else if( props.searchTextTitle && props.searchGenre) {
          return (
            <div >
              <h1 className='listmatches-header'>List/Matches</h1>
              <table className='item-table'>
                <tr>
                  <th className='table-title-header' >Title</th>
                  <th className='table-year-header'>Year</th>
                  <th> </th>
                  <th> </th>
                </tr>
              {props.plays
                .filter( play => play.title.toLowerCase().includes(props.searchTextTitle.toLowerCase())  )
                .filter( play => play.genre.toLowerCase().includes(props.searchGenre.toLowerCase()) )
                .map( (play, i) => ( <ListMatchesItem play={play} key={i} handleDisplayChoice={props.handleDisplayChoice}
                  handleSelectedPlay={props.handleSelectedPlay} displayAllOrMatch={props.displayAllOrMatch} handleFavoritesClick={props.handleFavoritesClick}/> ) )}
                  </table>
            </div>
          );
        } else if( (props.searchBefore && props.searchYearBefore) && (props.searchAfter && props.searchYearAfter)  ) {
          return (
            <div >
              <h1 className='listmatches-header'>List/Matches</h1>
              <table className='item-table'>
                <tr>
                  <th className='table-title-header' >Title</th>
                  <th className='table-year-header'>Year</th>
                  <th> </th>
                  <th> </th>
                </tr>
              {props.plays
                .filter( play => play.likelyDate <= props.searchYearBefore )
                .filter( play => play.likelyDate >= props.searchYearAfter )
                .map( (play, i) => ( <ListMatchesItem play={play} key={i} handleDisplayChoice={props.handleDisplayChoice}
                  handleSelectedPlay={props.handleSelectedPlay} displayAllOrMatch={props.displayAllOrMatch} handleFavoritesClick={props.handleFavoritesClick}/> ) )}
                  </table>
            </div>
          );
        } else if( (props.searchBefore && props.searchYearBefore) && props.searchGenre !== 'all') {
          return (
            <div >
              <h1 className='listmatches-header'>List/Matches</h1>
              <table className='item-table'>
                <tr>
                  <th className='table-title-header' >Title</th>
                  <th className='table-year-header'>Year</th>
                  <th> </th>
                  <th> </th>
                </tr>
              {props.plays
                .filter( play => play.likelyDate < props.searchYearBefore )
                .filter( play => play.genre.toLowerCase().includes(props.searchGenre.toLowerCase()) )
                .map( (play, i) => ( <ListMatchesItem play={play} key={i} handleDisplayChoice={props.handleDisplayChoice}
                  handleSelectedPlay={props.handleSelectedPlay} displayAllOrMatch={props.displayAllOrMatch} handleFavoritesClick={props.handleFavoritesClick}/> ) )}
                  </table>
            </div>
          );
        } else if( (props.searchAfter && props.searchYearAfter) && props.searchGenre) {
          return (
            <div >
              <h1 className='listmatches-header'>List/Matches</h1>
              <table className='item-table'>
                <tr>
                  <th className='table-title-header' >Title</th>
                  <th className='table-year-header'>Year</th>
                  <th> </th>
                  <th> </th>
                </tr>
              {props.plays
                .filter( play => play.likelyDate > props.searchYearAfter )
                .filter( play => play.genre.toLowerCase().includes(props.searchGenre.toLowerCase()) )
                .map( (play, i) => ( <ListMatchesItem play={play} key={i} handleDisplayChoice={props.handleDisplayChoice}
                  handleSelectedPlay={props.handleSelectedPlay} displayAllOrMatch={props.displayAllOrMatch} handleFavoritesClick={props.handleFavoritesClick}/> ) )}
                  </table>
            </div>
          );
        } else if(props.searchTextTitle && (!props.searchBefore && !props.searchYearBefore) && (!props.searchAfter && !props.searchYearAfter) && !props.searchGenre ) {
            return (
              <div >
                <h1 className='listmatches-header'>List/Matches</h1>
                <table className='item-table'>
                  <tr>
                    <th className='table-title-header' >Title</th>
                    <th className='table-year-header'>Year</th>
                    <th> </th>
                    <th> </th>
                  </tr>
                {props.plays
                  .filter( play => play.title.toLowerCase().includes(props.searchTextTitle.toLowerCase())  )
                  .map( (play, i) => ( <ListMatchesItem play={play} key={i} handleDisplayChoice={props.handleDisplayChoice}
                    handleSelectedPlay={props.handleSelectedPlay} displayAllOrMatch={props.displayAllOrMatch} handleFavoritesClick={props.handleFavoritesClick}/> ) )}
                    </table>
              </div>
            );
        } else if(props.searchGenre && !props.searchTextTitle && (!props.searchBefore && !props.searchYearBefore) && (!props.searchAfter && !props.searchYearAfter) ) {
            return (
              <div >
                <h1 className='listmatches-header'>List/Matches</h1>
                <table className='item-table'>
                  <tr>
                    <th className='table-title-header' >Title</th>
                    <th className='table-year-header'>Year</th>
                    <th> </th>
                    <th> </th>
                  </tr>
                {props.plays
                  .filter( play => play.genre.toLowerCase().includes(props.searchGenre.toLowerCase()) )
                  .map( (play, i) => ( <ListMatchesItem play={play} key={i} handleDisplayChoice={props.handleDisplayChoice}
                    handleSelectedPlay={props.handleSelectedPlay} displayAllOrMatch={props.displayAllOrMatch} handleFavoritesClick={props.handleFavoritesClick}/> ) )}
                    </table>
              </div>
            );
        } else if( (props.searchBefore && props.searchYearBefore) && !props.searchTextTitle && (!props.searchAfter && !props.searchYearAfter) && !props.searchGenre ) {
          return (
            <div >
              <h1 className='listmatches-header'>List/Matches</h1>
              <table className='item-table'>
                <tr>
                  <th className='table-title-header' >Title</th>
                  <th className='table-year-header'>Year</th>
                  <th> </th>
                  <th> </th>
                </tr>
              {props.plays
                .filter( play => play.likelyDate < props.searchYearBefore )
                .map( (play, i) => ( <ListMatchesItem play={play} key={i} handleDisplayChoice={props.handleDisplayChoice}
                  handleSelectedPlay={props.handleSelectedPlay} displayAllOrMatch={props.displayAllOrMatch} handleFavoritesClick={props.handleFavoritesClick}/> ) )}
                  </table>
            </div>
          );
        } else if( (props.searchAfter &&  props.searchYearAfter) && !props.searchTextTitle && (!props.searchBefore && !props.searchYearBefore) && !props.searchGenre ) {
          return (
            <div >
              <h1 className='listmatches-header'>List/Matches</h1>
              <table className='item-table'>
                <tr>
                  <th className='table-title-header' >Title</th>
                  <th className='table-year-header'>Year</th>
                  <th> </th>
                  <th> </th>
                </tr>
              {props.plays
                .filter( play => play.likelyDate > props.searchYearAfter )
                .map( (play, i) => ( <ListMatchesItem play={play} key={i} handleDisplayChoice={props.handleDisplayChoice}
                  handleSelectedPlay={props.handleSelectedPlay} displayAllOrMatch={props.displayAllOrMatch} handleFavoritesClick={props.handleFavoritesClick}/> ) )}
                  </table>
            </div>
          );
        } else if (!props.searchTextTitle && (!props.searchBefore && !props.searchYearBefore) && (!props.searchAfter && !props.searchYearAfter) && !props.searchGenre ) {
            return (
              <div >
                <h1 className='listmatches-header'>List/Matches</h1>
                <table className='item-table'>
                  <tr>
                    <th className='table-title-header' >Title</th>
                    <th className='table-year-header'>Year</th>
                    <th> </th>
                    <th> </th>
                  </tr>
                  {props.plays.map( (play, i) => <ListMatchesItem play={play} key={i} handleDisplayChoice={props.handleDisplayChoice} searchTextTitle={props.searchTextTitle} handleSelectedPlay={props.handleSelectedPlay}
                    displayAllOrMatch={props.displayAllOrMatch} handleFavoritesClick={props.handleFavoritesClick} /> ) }
                </table>
              </div>
            );
        } else {
            return (
              <div >
                <h1 className='listmatches-header'>List/Matches</h1>
                NONE
              </div>
            );
        }
    }
  }

  //renders movie details when the title or VIEW is clicked
  //Tabs from: https://www.youtube.com/watch?v=WkREeDy2WQ4&ab_channel=LearntoCreate.
  const renderDetails = () => {
    return (
      <div className="App">
      <div className="tabs-container">
        <div className="bloc-tabs">
          <button className="tab-button"
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
            Details
          </button>
          <button className="tab-button"
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => {toggleTab(2)} }>
            Characters
          </button>
          <button className="tab-button"
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => {toggleTab(3)} }>
            Text
          </button>
        </div>

        <div className="content-tabs">
          <div className={toggleState === 1 ? "content  active-content" : "content"}>
            <div>Likely date of composition: {props.selectedPlay.likelyDate}</div><br/>
            <div>Genre: {props.selectedPlay.genre}</div><br/>
            <div>Wiki: <a href={props.selectedPlay.wiki}>{props.selectedPlay.wiki}</a></div><br/>
            <div>Gutneberg: <a href={props.selectedPlay.gutenberg}>{props.selectedPlay.gutenberg}</a></div><br/>
            <div>ShakespearOrg: <a href={props.selectedPlay.shakespeareOrg}>{props.selectedPlay.shakespeareOrg}</a></div><br/>
            <div>Description: {props.selectedPlay.desc}</div>

            <p>

            </p>
          </div>

          <div
            className={toggleState === 2 ? "content  active-content" : "content"}
          >
            <h2>COMING SOON!</h2>

            <p>

            </p>
          </div>

          <div
            className={toggleState === 3 ? "content  active-content" : "content"}
          >
            <h2>COMING SOON!</h2>

            <p>

            </p>
          </div>
        </div>
      </div>
      </div>


    );
  }

  if(props.display) {
    return renderListMatches();
  } else {
    return renderDetails();
  }


}

export default ListMatchesAndDetails;
