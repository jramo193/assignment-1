import './App.css';
import React, { useEffect, useState }  from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import PlayBrowser from './components/PlayBrowser.js';
import Home from './components/Home.js';
import Loader from './components/Loader.js';
import { CSSTransition } from 'react-transition-group';

function App() {
  const [display, setDisplay] = useState(true);
  const [displayAllOrMatch, setDisplayAllOrMatch] = useState();
  const [plays, setPlays] = useState([]);
  const [searchTextTitle, setSearchTextTitle] = useState('');
  const [searchGenre, setSearchGenre] = useState('');
  const [favorites, setFavorites] = useState([]);
  let storedPlays = retrieveStoragePlays();
  const [playsWithDetails, setPlaysWithDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [appearHome, setAppearHome] = useState(true);

  //fetches data, saves it to local storage, while running the loading animation
  useEffect(  () => {
    const getData = async () => {
      try {
        if(storedPlays.length == 0) {
          const url = "https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/list.php";
          const response = await fetch(url);
          setLoading(true);
          const data = await response.json();
          localStorage.setItem('plays', JSON.stringify(data));
          storedPlays = JSON.parse(localStorage.getItem('plays'));
          setPlays(storedPlays);
          setLoading(false);
        }
        else {
          setPlays(storedPlays);
        }
      }
      catch (err) {
        console.error(err);
      }
    };

    getData();
  }, [] );



  function retrieveStoragePlays() {
    return JSON.parse(localStorage.getItem('plays')) || [];
  }


  const handleDisplayChoice = (answer) => {
    setDisplay(answer);
  }

  const handleDisplayAllOrMatch = (answer) => {
    setDisplayAllOrMatch(answer);
  }

  const handleTitleChange = (updatedTitle) => {
    setSearchTextTitle(updatedTitle);
  }

  const handleGenreChange = (updatedGenre) => {
    setSearchGenre(updatedGenre);
  }

  const addFavorites = (play) => {
    if(!favorites.some( e => e['id'] === play.id )){
      const newFavoritesList = [...favorites, play];
      setFavorites(newFavoritesList);
    }
  }

  const removeFavorites = (play) => {
    const newFavoritesList = favorites.filter( (favorite) => favorite.id !== play.id );
    setFavorites(newFavoritesList);
  }

//renders the loading animation while fetching data
const renderLoading = () => {
   return (
      <main>
        <div className="loader">
          <Route path='/assignment-1/' exact>
            <Loader />
          </Route>
        </div >

        <div>
          <Route path='/assignment-1/showlistmatch' exact>
            <PlayBrowser plays={plays}  handleDisplayChoice={handleDisplayChoice} handleDisplayAllOrMatch={handleDisplayAllOrMatch}  display={display}
              displayAllOrMatch={displayAllOrMatch} searchTextTitle={searchTextTitle} favorites={favorites} handleFavoritesClick={addFavorites} handleDeleteClick={removeFavorites} handleTitleChange={handleTitleChange}
               />
          </Route>
        </div >

        <div className='imagecredits'> Image credits: Ricky Turner from https://unsplash.com/photos/paCF_o4FGwg </div>
      </main>
   );
}

//renders the home screen after data is fetched
//Animation from: https://www.youtube.com/watch?v=BZRyIOrWfHU&ab_channel=Ihatetomatoes
const renderHome = () => {
   return (
      <main>
        <div>
          <Route path='/assignment-1/' exact>
          <CSSTransition
            in={appearHome}
            appear={true}
            timeout={500}
            classNames="fade"
          >
            <Home plays={plays} handleDisplayChoice={handleDisplayChoice} handleDisplayAllOrMatch={handleDisplayAllOrMatch} handleTitleChange={handleTitleChange}  handleGenreChange={handleGenreChange}/>
          </CSSTransition>
          </Route>
        </div >

        <div>
          <Route path='/assignment-1/showlistmatch' exact>
            <PlayBrowser plays={plays}  handleDisplayChoice={handleDisplayChoice} handleDisplayAllOrMatch={handleDisplayAllOrMatch}  display={display}
              displayAllOrMatch={displayAllOrMatch} searchTextTitle={searchTextTitle} favorites={favorites} handleFavoritesClick={addFavorites} handleDeleteClick={removeFavorites} handleTitleChange={handleTitleChange}
               />
          </Route>
        </div >

        <div className='imagecredits'> Image credits: Ricky Turner from https://unsplash.com/photos/paCF_o4FGwg </div>
      </main>
   );
}

   if(loading) {
     return renderLoading();
   } else {
     return renderHome();
   }

}


export default App;
