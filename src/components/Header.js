import React from 'react';
import {Link} from "react-router-dom";

function Header() {
return(

    <div className="navi">
    
        <div className="logo">
            <img src="images/waterlabs-logo.png" width="200" />
            </div>
        <ul className="Nav-links">
            <li> <a> <button varient="outline-success" >Subscribe</button> </a> </li>
        </ul>
    
    </div>
)
}

export default Header