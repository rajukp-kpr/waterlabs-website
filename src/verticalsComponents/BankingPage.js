import React from "react";
import "../App.css";

import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}



function BankingPage() {
  return (
    <div>

<ScrollToTopOnMount />

      <div className="up">
        <img src="images/banking.png" width="400" />

        <h1>Banking</h1>

        <p>
          Banks have started building AI systems to sort the complex data and
          add subsequent ones, for creating a universal record and profile for
          every client. Banks make adequate investments to store data and
          prevent data leakage safely. AI detects banks' potential hazards in
          the implementation stage and then efficiently identifies and executes
          strategies according to the priorities of the organization. Artificial
          intelligence is a crucial element in gaining a competitive advantage.
        </p>
      </div>
      <div className="low">
        <div className="lower">
          <h1> Drive banking business</h1>
          <p>
            AI can efficiently handle Wealth management and portfolio management
            in banking. For those people who hate to visit banks, AI can pave
            way for them to make use of banking at their fingertips. It
            embellishes the mobile banking facility by managing basic banking
            services. The users can get the benefits of automated and safe
            transactions and can get a notification instantly for any
            transaction at any time. Credit and debit card management is another
            application of AI.
          </p>

          <h2>Prevent frauds and Secures personal data</h2>
          <p>
            Banks should be indeed for providing secure and faster transactions.
            The pre-defined set of rules by AI is designed to detect the fraud
            in the transactions. AI also plays a crucial role in protecting
            personal data. As we witness an increase of frauds in recent years,
            AI can give a helping hand in preventing such attempts. So, for AI
            has a tremendous scope in the domain of cyber security.
          </p>
          <h3>
            Personalization of financial services</h3>
            <p>
              AI algorithm helps in analyzing and tracking the customer data
              like behavioral, demographics, location, etc to provide best
              service available to their customer, and solving a problem
              immediately.
            </p>
    

          <ul>
            <li>Account Opening – Time bound automation for self service</li>
            <li>Opening a loan account</li>
            <li>Settlement of Loan</li>
            <li>Travel Card Processes</li>
            <li>Progress payments based on mile stones</li>
            <li>Credit Card Account opening</li>
            <li>Reconciliation and amendments (BRS)</li>
            <li>Roll-over request processing</li>
            <li>Customer e-registration</li>
        
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BankingPage;
