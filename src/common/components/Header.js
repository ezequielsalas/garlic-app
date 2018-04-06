import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Header = () => {

    return (
      <header className="container-header">
      
       <h1>Garlic</h1>
<Router>
       <ul>
       
        <li>
          <Link to="/ingredients">Ingredients</Link>
        </li>
        <li>
          <Link to="/recipts">Recipts</Link>
        </li>
      </ul>
      </Router>
      </header>
    );
};

export default Header;