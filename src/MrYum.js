import React from 'react'

class MrYum extends React.Component {

  render() {
    return(
      <div className="mr-yum">

          <div className="heading">
            <h1>Mr Yum</h1>
            <h3>Lead Product Engineer</h3>
            <h3>React, AWS, Airtable</h3>
          </div>

          <div className="body">
            <div>
              <p>
                Mr Yum is a web application developed for the hospitality industry to replace print menus with mobile visual menus. The application is launched via QR code scan and the menu information is displayed to the user. My role in this project was as the lead product engineer and developer, working closely with our creative director and product team.
              </p>
            </div>

            <div>
              <p><b>&rarr;</b> Multi-language support of 5+ languages via Google Cloud Translate API</p>
              <p><b>&rarr;</b> Ingredient definitions using a bespoke culinary dictionary and Airtable API</p>
              <p><b>&rarr;</b> Analytics and statistics using Hotjar and Google Analytics</p>
            </div>

            <div>
              <p>
                The application was built using the React JavaScript framework to create a fluid user experience similar to a native mobile application. To manage and store the data for Mr Yum, Airtable was used as the backend for the application; this allowed for the app's data to be accessed easily by any members of the team quickly and efficiently without needing a developer on hand to help.
              </p>
            </div>
          </div>


        <div className="phone-view"></div>

        <div className="tablet-view"></div>

      </div>
    )
  }
}

export default MrYum
