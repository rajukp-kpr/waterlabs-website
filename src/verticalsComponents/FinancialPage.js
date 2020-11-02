import React from "react";
import "../App.css";


import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

function FinancialPage() {
  return (
    <div>

<ScrollToTopOnMount />

      <div className="up">
        <img src="images/financial-services.png" width="400" />

        <h1>Financial Services</h1>

        <p>
          AI has the potential to super-charge financial services and transform
          the way services are delivered to customers. It could allow more
          informed and tailored products and services, internal process
          efficiencies, enhanced cyber security and reduced risk.
        </p>
      </div>
      <div className="low">
        <div className="lower">
          <p>
            However, to properly understand the impact of AI, and the extent to
            which it really does herald the creation of a fourth industrial
            revolution, it is necessary to consider what AI really is and what
            it is capable of. It also necessary to address the regulatory and
            ethical challenges to its use. None of this means firms should shy
            away from the use of AI. Approached properly this can provide
            significant benefits for the firm, its customers and wider society.
            Disruptive technology is a fact of life and it is not the strongest
            businesses that survive but the most adaptable to change. We are
            beginning to see increased engagement from regulators with respect
            to AI, particularly in the financial services arena. In this report,
            we will explore both the existing and developing regulation of AI,
            and key legal issues that arise for businesses deploying the
            technology that is available today, in each case in the context of
            the financial services sector. This is a complex and evolving area
            requiring a multidisciplinary legal approach.
          </p>
          <ul>
            <li>Inventory management</li>
            <li>Warehouse management</li>
            <li>Supply chain management</li>
            <li>Governance reporting</li>
            <li>Consignment processing</li>
            <li>Shipment processing</li>
            <li>Distribution tracking</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FinancialPage;
