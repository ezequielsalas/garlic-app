import React from 'react';
import { Link } from "react-router-dom";

const Header = (props) => {

    return (
      <header className="container-header">
      
       <h1>Garlic</h1>

       <ul>
       
        <li>
          <Link to="/ingredients">Ingredients</Link>
        </li>
        <li>
          <Link to="/recipts">Recipts</Link>
        </li>
      </ul>
      
      </header>
    );
};

export default Header;