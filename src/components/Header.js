import React from 'react';
import {Link} from "react-router-dom";

function Header() {
return(
 
    <div className="navi" >
    
        <div className="logo">
            
<a href="/#tp">

            <img src="images/waterlabs-logo.png" width="200"  />

            </a>
           
            </div>
        <ul className="Nav-links">
            <li> <a href="/#sub"> subscribe </a> </li>
        </ul>
    
    </div>
)
}

export default Header