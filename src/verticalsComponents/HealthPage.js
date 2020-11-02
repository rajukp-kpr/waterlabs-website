import { render } from "@testing-library/react";
import React from "react";
import "../App.css";

import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}



function HealthPage() {



  return (

    
    


    <div>

<ScrollToTopOnMount />

          <div className="up">
        <img src="images/healthcare.png" width="400" />

        <h1>HealthCare</h1>

        <p>
          The healthcare industry is one of the significant sections of the
          economy. With every passing day, the healthcare industry is growing.
          This growth translates to more people concerned about their health,
          which in turn translates into more people taking up the healthcare
          chain. i.e. going to the hospital and ending up spending money on the
          associated costs. With more and more people, more and more data is
          coming into the picture. With the involvement of data, artificial
          intelligence is put to its best use for doing things better and just
          right. The application of artificial intelligence has proved to be a
          symbiotic for both the parties – the ones who are driving it and the
          ones who are availing the benefits of it. The healthcare industry
          forms almost 12% of any developed or developing economy and is making
          the best use of the resources available with it which are stored in
          the form of data. The health data of billions are stored in the form
          of hospital records, medical prescriptions, pathology reports, etc.
        </p>
      </div>
      <div className="low">  
      <div className="lower">
        <p>
          Our mission is to help healthcare organizations, payers, and their
          partners use AI technology to help improve outcomes, streamline
          operations, identify financial risks, and retain their most valuable
          health consumers (patients, members, employees). We work with you to
          turn your ever-increasing volumes of data into cutting edge insights
          and predictions that will drive cost saving clinical, operational, and
          financial decisions across your enterprise.
        </p>
        <ul>
          <li>Electronic Health Records Management</li>
          <li>Employee on-boarding</li>
          <li>Employee on-boarding</li>
          <li>IVR Status checks</li>
          <li>Adjudication</li>
          <li>Claims recovery</li>
          <li>Automated reports</li>
          <li>Coding Compliance Monitoring</li>
          <li>Quality and Quantity Metrics tracking</li>
          <li>Medicare enrollment</li>
          <li>Pre-authorization applying and confirmations</li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default HealthPage
