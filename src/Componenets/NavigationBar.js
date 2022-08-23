import React from "react";
function NavigationBar() {
  return (
    <nav className="Navi">
      <a href="/" className="sit-tite">
        Home
      </a>
      <ul>
        <li>
          <a href="/Favorite">Favorite</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
