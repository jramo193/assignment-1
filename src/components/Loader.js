import React from "react";
import './Loader.css';

const Loader = props => {
  //renders the loading animation
  //Loader from: https://loading.io/css/
  return (
      <div className="lds-ring"><div></div><div></div><div></div></div>
  );
}

export default Loader
