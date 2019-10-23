import React from "react";

function ScoreBoard(props) { 
return( 
  <div>
      <p>Score: {props.currentScore}</p><p>High Score: {props.highScore}</p>
  </div>
);
}
export default ScoreBoard;