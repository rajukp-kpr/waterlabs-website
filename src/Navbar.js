import React from 'react';

function Navbar() {
return(

    <div>
    <nav>
        <div className="logo">
            <img src="images/waterlabs-logo.png" width="200" />
            </div>
        <ul className="Nav-links">
                       
            <li><a> <button varient="outline-success" > Subscribe </button></a></li>
        </ul>
    </nav>
    </div>
)
}

export default Navbar