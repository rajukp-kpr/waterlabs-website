import React from "react";
import "../App.css";

function InsurancePage() {
  return (
    <div>
      <div className="up">
        <img src="images/insurance.png" width="400" />

        <h1>Insurance</h1>

        <p>
          AI has the potential to transform the insurance experience of
          customers from frustrating and bureaucratic to something fast,
          on-demand, and more affordable. Tailor-made insurance products are
          attracting more customers at a fairer price. Companies applying AI
          tech to a mountain of data at their disposal, seeing more flexible
          insurance, such as on-demand pay-as-you-go insurance, and premiums
          that automatically adjust in response to accidents, customer health,
          etc.
        </p>
      </div>
      <div className="low">
        <div className="lower">
          <p>
            We will see insurance become more personalized because insurance
            companies using AI technology will be able to better understand what
            their customers need. Insurers will be able to make cost savings by
            accelerating workflows. They will also discover new revenue streams
            as AI-driven analysis opens up new business opportunities and
            cross-selling opportunities. Most importantly, the AI solutions
            described above can make it easier for clients to interact with
            insurance companies. This could lead to people being more likely to
            purchase insurance.
          </p>
          <ul>
            <li>Claims Processing – General & Life</li>
            <li>Claims verification</li>
            <li>Policy life cycle management</li>
            <li>Dispute resolution</li>
            <li>Renewals</li>
            <li>Partner Management</li>
            <li>Brokering</li>
            <li>Accident Insurance</li>
            <li>Fraud Management</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default InsurancePage;
