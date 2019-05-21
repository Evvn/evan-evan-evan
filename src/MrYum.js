import React from "react";

class MrYum extends React.Component {
  render() {
    return (
      <div className="mr-yum">
        <div className="heading">
          <h1>Mr Yum</h1>
          <h3>Lead Front End Developer</h3>
          <h3>React, Redux, Stripe Payments</h3>
        </div>

        <div className="body">
          <div>
            {/* <p>
              Mr Yum is a web application developed for the hospitality industry
              to replace print menus with mobile visual menus. The application
              is launched via QR code scan and the menu information is displayed
              to the user, allowing them to order and pay for their food from
              their phone. My role in this project was as the lead front end
              developer, working closely with our creative director and product
              team.
              </p> */}

            <p>
              Mr Yum is a React web application developed to redefine the
              ordering experience in the hospitality industry. Launched via QR
              code scan, it allows users to search, filter, and translate the
              entirety of the menu. Mr Yum also supports Point of Sale
              integration using Doshii, giving users the ability to place their
              order and pay from their phone. Payments are handled securely with
              Stripe, and customers have the option of paying with Apple Pay,
              Google Pay, or scanning their card.
            </p>
            <br />
            <br />
            <p>My work on Mr Yum includes...</p>
          </div>

          <div>
            <p>
              <b>&rarr;</b> Global state management using Redux for improved
              performance, conditional rendering, and storing persistent
              customer information
            </p>
            <p>
              <b>&rarr;</b> Writing Redux-Saga functions to handle API calls to
              our express API. These are used for fetching menu information,
              handling Stripe payments, and triggering SMS notifications and
              phone number verification
            </p>
            <p>
              <b>&rarr;</b> Creating routes on our backend-for-frontend server
              with a bespoke API hosted on AWS, and engineering the payloads for
              use in the applications front end
            </p>
            <p>
              <b>&rarr;</b> Secure payment processing using Stripe API, POS
              integration using Doshii
            </p>
          </div>

          <div>
            {/* <p>
              The application was built using ReactJS to create a fluid user
              experience similar to a native mobile application.
            </p> */}
            <p>
              With 1,000 daily users across 50+ venues in Melbourne, Mr Yum is
              gaining attention from media, venue owners, and investors (1.2
              million in seed funding!). We're currently handling 100% of the
              food orders at Federation Square's pop-up Winter Village, open for
              the next 4 months.
            </p>
            <p>
              <br />
              <strong>See Mr Yum in the media:</strong>
            </p>
            <p>
              <a href="https://www.theage.com.au/national/victoria/ending-food-fomo-the-technologies-changing-the-nature-of-eating-out-20190426-p51hgs.html">
                Mr Yum in The Age
              </a>
            </p>
            <p>
              <a href="https://www.broadsheet.com.au/melbourne/food-and-drink/article/mr-yum-wants-cure-your-food-envy">
                Mr Yum in Broadsheet
              </a>
            </p>
            <br />
            <p>
              <strong>Try it out!</strong>
            </p>
            <p>
              <a href="https://www.mryum.com.au/proudmary">
                Proud Mary on Mr Yum
              </a>
            </p>
          </div>
        </div>

        <div className="phone-view" />

        <div className="tablet-view" />
      </div>
    );
  }
}

export default MrYum;
