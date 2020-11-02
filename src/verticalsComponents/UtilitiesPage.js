import React from "react";
import "../App.css";

function UtilitiesPage() {
  return (
    <div>
      <div className="up">
        <img src="images/utilities.png" width="400" />

        <h1>Utilities</h1>

        <p>
          AI is increasingly aiding utilities in managing, optimizing and
          maintaining not only their infrastructure, but their customer support
          operation as well. AI is helping utility companies automate repetitive
          customer inquiries and other tasks, thereby allowing them to
          concentrate on building customer relationships and taking their
          customer service to the next level.
        </p>
      </div>
      <div className="low">
        <div className="lower">
          
          <ul>
            <li>Meter to cash</li>
            <li>Automated CRM work flow and reports</li>
            <li>Asset operations and performance tracking analytics</li>
            <li>Situational intelligence and fraud management</li>
            <li>Efficiency reporting</li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UtilitiesPage;
