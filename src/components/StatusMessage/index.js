import React from "react";


function StatusMessage(props) { 
return( 
        <span className="navbar-text">
          {props.statusMsg}
        </span>
); 
}

export default StatusMessage;