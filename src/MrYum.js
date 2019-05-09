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
            <p>
              Mr Yum is a web application developed for the hospitality industry
              to replace print menus with mobile visual menus. The application
              is launched via QR code scan and the menu information is displayed
              to the user, allowing them to order and pay for their food from
              their phone. My role in this project was as the lead front end
              developer, working closely with our creative director and product
              team.
            </p>
          </div>

          <div>
            <p>
              <b>&rarr;</b> Global state management using Redux and Saga for
              React.
            </p>
            <p>
              <b>&rarr;</b> Backend-for-frontend server with bespoke API hosted
              on AWS
            </p>
            <p>
              <b>&rarr;</b> Payment processing using Stripe API, POS integration
              using Doshii
            </p>
          </div>

          <div>
            <p>
              The application was built using the ReactJS to create a fluid user
              experience similar to a native mobile application.
            </p>
            <p>
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
          </div>
        </div>

        <div className="phone-view" />

        <div className="tablet-view" />
      </div>
    );
  }
}

export default MrYum;
