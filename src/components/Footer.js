import { findAllByDisplayValue } from '@testing-library/react';
import React from 'react';

function Footer () {

    return (

        <div className="footer">

          <img src="images/waterlabs-logo.png" width="200" />  

          <p> © 2020 Waterlabs AI LLC. All rights reserved.
              <br />
               Waterlabs AI LLC. 1201 Orange Street, Suite 600, Wilimgton, DE,19801.</p>


        </div>
    )
}

export default Footer