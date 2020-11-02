import React from "react";
import "../App.css";

function RetailPage() {
  return (
    <div>
      <div className="up">
        <img src="images/retail-space.png" width="400" />

        <h1>Retail Space</h1>

        <p>
          Waterlab.ai assistants can engage customers in conversation,
          understand their requirements, make personalized recommendations and
          ultimately encourage them to make a purchase.For retail companies, AI
          creates an opportunity to bridge the gap between virtual and physical
          sales channels.
        </p>
      </div>
      <div className="low">
        <div className="lower">
          <p>
            By effectively using AI assistants in retail, brands are enhancing
            the overall shopping experience with powerful impact. AI Assistants
            help customers on their purchase journey by understanding their
            requirements and making relevant recommendations. By offering a
            seamless shopping experience, they can improve a customer's
            perception of a brand, building lasting brand loyalty.
          </p>
          <ul>
            <li>Multi-channel O2C</li>
            <li>POS / Online sales integration</li>
            <li>Customer Experience Analytics Dashboards</li>
            <li>Loyalty cards automation</li>
            <li>Supplier reporting</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RetailPage;
