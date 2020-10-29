import React from "react";

function Verticals() {
  return (
    <div className="all">
      <div className="health">
        <img src="images/healthcare.png" width="500" />

        <div classname="text">
          <h1>Healthcare</h1>
          <p>
            {""}
            Healthcare is becoming more crucial day-by-day, as from disease
            diagnosis to health monitoring, drug research and medicine analysis,
            it has dramatic role into many subfields helping patients to avail
            better treatment and medical care at hospitals.
          </p>

          <div className="bu">
            {" "}
            <button varient="outline-success"> KnowMore </button>{" "}
          </div>
        </div>
      </div>

      <div className="banking">
        <div classname="text">
          <h1>Banking</h1>
          <p>
            {""}
            Banks have started building AI systems to sort the complex data and
            add subsequent ones, for creating a universal record and profile for
            every client. Banks make adequate investments to store data and
            prevent data leakage safely. AI detects banks' potential hazards in
            the implementation stage and then efficiently identifies and
            executes strategies according to the priorities of the organization.
            Artificial intelligence is a crucial element in gaining a
            competitive advantage.
          </p>

          <div className="bu">
            {" "}
            <button varient="outline-success"> KnowMore </button>{" "}
          </div>
        </div>

        <img src="images/banking.png" width="500" />
      </div>

      <div className="insurance">
        <img src="images/insurance.png" width="500" />

        <div classname="text">
          <h1>Insurance</h1>
          <p>
            {""}
            AI has the potential to transform the insurance experience of
            customers from frustrating and bureaucratic to something fast,
            on-demand, and more affordable. Tailor-made insurance products are
            attracting more customers at a fairer price. Companies are applying
            AI tech to a mountain of data at their disposal, seeing more
            flexible insurance, such as on-demand pay-as-you-go insurance, and
            premiums that automatically adjust in response to accidents,
            customer health, etc.
          </p>

          <div className="bu">
            {" "}
            <button varient="outline-success"> KnowMore </button>{" "}
          </div>
        </div>
      </div>

      <div className="retail">
        <div classname="text">
          <h1>Retail Space</h1>
          <p>
            {""}
            Waterlab.ai assistants can engage customers in conversation,
            understand their requirements, make personalized recommendations and
            ultimately encourage them to make a purchase.For retail companies,
            AI creates an opportunity to bridge the gap between virtual and
            physical sales channels.
          </p>

          <div className="bu">
            {" "}
            <button varient="outline-success"> KnowMore </button>{" "}
          </div>
        </div>

        <img src="images/retail-space.png" width="500" />
      </div>
      
      
      <div className="utilities">
        <img src="images/utilities.png" width="500" />

        <div classname="text">
          <h1>Utilities</h1>
          <p>
            {""}
            AI is increasingly aiding utilities in managing, optimizing and maintaining not only their infrastructure, but their customer support operation as well. AI is helping utility companies automate repetitive customer inquiries and other tasks, thereby allowing them to concentrate on building customer relationships and taking their customer service to the next level.
          </p>

          <div className="bu">
            {" "}
            <button varient="outline-success"> KnowMore </button>{" "}
          </div>
        </div>
      </div>


      <div className="logistics">
        <div classname="text">
          <h1>Logistics</h1>
          <p>
            {""}
            AI plays a vital role in saving time, reducing costs and increasing productivity and accuracy with cognitive automation. AI affects warehouse operations, such as collecting and analyzing information or inventory processing. As a result, AI can help increase efficiency and reap benefits. Artificial intelligence is beneficial for transportation.
          </p>

          <div className="bu">
            {" "}
            <button varient="outline-success"> KnowMore </button>{" "}
          </div>
        </div>

        <img src="images/logistics.png" width="500" />
      </div>


      <div className="financial">
        <img src="images/financial-services.png" width="500"  />

        <div classname="text">
          <h1>Financial Services</h1>
          <p>
            {""}
            AI has the potential to super-charge financial services and transform the way services are delivered to customers. It could allow more informed and tailored products and services, internal process efficiencies, enhanced cybersecurity and reduced risk.
          </p>

          <div className="bu">
            {" "}
            <button varient="outline-success"> KnowMore </button>{" "}
          </div>
        </div>
      </div>


    </div>
  );
}

export default Verticals;
