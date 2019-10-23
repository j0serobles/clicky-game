import React from "react";
import StatusMessage from "../StatusMessage";
import ScoreBoard    from "../ScoreBoard";

function Navbar(props) { 
return( 
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/"><i className="fas fa-mouse"></i>  <strong>Clicky-Game</strong></a>
  <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <StatusMessage statusMsg={ props.statusMsg }/>
      </li>
      <li className="nav-item">
        <ScoreBoard currentScore={props.currentScore} highScore={props.highScore}/>
      </li>
    </ul>
</nav>
); 
}

export default Navbar;