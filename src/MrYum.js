import React from 'react'

class MrYum extends React.Component {

  render() {
    return(
      <div className="mr-yum">

          <div className="heading">
            <h1>Mr Yum</h1>
            <h3>Lead Front End Developer</h3>
            <h3>React, AWS, Airtable</h3>
          </div>

          <div className="body">
            <div>
              <p>
                Mr Yum is a web application developed for the hospitality industry to replace print menus with mobile visual menus. The application is launched via QR code scan and the menu information is displayed to the user. My role in this project was as the lead product engineer and developer, working closely with our creative director and product team.
              </p>
            </div>

            <div>
              <p><b>&rarr;</b> Global state management using Redux and Saga for React.</p>
              <p><b>&rarr;</b> Multi-language support of 5+ languages via Google Cloud Translate API</p>
              <p><b>&rarr;</b> Ingredient definitions using a bespoke culinary dictionary and Airtable API</p>
            </div>

            <div>
              <p>
                The application was built using the React JavaScript framework to create a fluid user experience similar to a native mobile application.
              </p>
              <p><strong>See Mr Yum in the media:</strong></p>
              <p><a href="https://www.theage.com.au/national/victoria/ending-food-fomo-the-technologies-changing-the-nature-of-eating-out-20190426-p51hgs.html">Mr Yum in The Age</a></p>
              <p><a href="https://www.broadsheet.com.au/melbourne/food-and-drink/article/mr-yum-wants-cure-your-food-envy">Mr Yum in Broadsheet</a></p>
            </div>
          </div>


        <div className="phone-view"></div>

        <div className="tablet-view"></div>

      </div>
    )
  }
}

export default MrYum
