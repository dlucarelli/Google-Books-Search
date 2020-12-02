import React from "react";

function Jumbotron({children}) {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
            <div className="container">
                {children}
            </div>
            </div>
        </div >
  );
}

export default Jumbotron;