import React, { useState }  from "react";
import { Link } from 'react-router-dom';
import Modal from "react-modal";
import './HeaderApp.css';
import logo from './pngwing.png';

Modal.setAppElement("#root");

const HeaderApp = function (props) {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    //styling for Modal
    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    };

//renders the modal, the logo, and the about button
//Modal from: https://www.youtube.com/watch?v=10FNqoPpNbE&ab_channel=Codevolution
//Logo image from: https://imgbin.com/png/0upkDZ7V/drama-school-theatre-play-png#_=_
    return (
      <div className="headerapp-comp">
        <div className='modal'>
          <Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)} style={customStyles}>
            <h1> COMP 4513 - Assignment 1 </h1>
            <div>Name: Jerik Ramos</div>
            <div><br/>Github: </div>
            <div><br/>Technology used: </div>
            <div>Atom</div>
            <div>Github</div>
            <div>Heroku</div>
            <div>HTML</div>
            <div>CSS</div>
            <div>JavaScript</div>
            <div>ReactJS: react-router-dom, react-modal</div>
            <div><br/>Third party sourced codes:</div>
            <div>Modal from: https://www.youtube.com/watch?v=10FNqoPpNbE&ab_channel=Codevolution</div>
            <div>Tabs from: https://www.youtube.com/watch?v=WkREeDy2WQ4&ab_channel=LearntoCreate.</div>
            <div>Loader from: https://loading.io/css/</div>
            <div>Animation from: https://www.youtube.com/watch?v=BZRyIOrWfHU&ab_channel=Ihatetomatoes</div>
            <div>Hero image from: https://unsplash.com/photos/paCF_o4FGwg</div>
            <div>Logo image from: https://imgbin.com/png/0upkDZ7V/drama-school-theatre-play-png#_=_</div>
            <br/><button className='close' onClick={() => setModalIsOpen(false)}>Close</button>
          </Modal>
        </div>

        <Link to={`/assignment-1/`}>
          <div className="header-logo">
              <img className="logo" src={logo} alt="logo"/>
          </div>
        </Link>

        <div className="about-button">
            <button className="about" onClick={() => setModalIsOpen(true)}>About</button>
        </div>

      </div>
    );
}

export default HeaderApp;
