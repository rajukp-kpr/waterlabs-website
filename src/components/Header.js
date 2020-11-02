import React from 'react';
import {Link} from "react-router-dom";

function Header() {
return(
 
    <div className="navi" >
    
        <div className="logo">
            
<a href="#top">

            <img src="images/waterlabs-logo.png" width="200" href="#top" />

            </a>
           
            </div>
        <ul className="Nav-links">
            <li> <a href="#sub"> subscribe </a> </li>
        </ul>
    
    </div>
)
}

export default Header