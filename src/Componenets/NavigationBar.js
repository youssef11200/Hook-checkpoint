import React from "react";
import {Link} from "react-router-dom"

function NavigationBar() {
  return (
    <nav className="Navi">
      
      <Link to="/Home">
        Home
      </Link>
    </nav>
  );
}

export default NavigationBar;
