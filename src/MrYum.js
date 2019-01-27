import React from 'react'
import { Fade } from 'react-slideshow-image'

let fadeImgs = [
  '/mryum_home.png',
  '/translations.png',
  '/definitions.png',
  '/hero.png',
  '/images.png',
  '/footer.png',
  '/faq.png'
]

let fadeProps = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false
}

class MrYum extends React.Component {

  PhoneSlideshow = () => {
    return (
      <Fade {...fadeProps}>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImgs[0]} alt="mr yum" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImgs[1]} alt="translations" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImgs[2]} alt="definitions" />
          </div>
        </div>
      </Fade>
    )
  }

  TabletSlideshow = () => {
    return (
      <Fade {...fadeProps}>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImgs[3]} alt="mr yum" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImgs[4]} alt="translations" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImgs[5]} alt="definitions" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImgs[6]} alt="definitions" />
          </div>
        </div>
      </Fade>
    )
  }


  render() {
    return(
      <div className="mr-yum">

        <div className="mr-yum-desc">
          <div className="heading">
            <h1>Mr Yum</h1>
            <h3> Lead Product Engineer</h3>
            <h3>React, JavaScript, Airtable</h3>
          </div>

          <div className="body">
            <p>
              Mr Yum is a web application developed for the hospitality industry to replace print menus with mobile visual menus. The application is launched via QR code scan and the menu information is displayed to the user. Key features include:
            </p>

            <p>- Multi-language support of 5+ langues via Google Translate API</p>
            <p>- Ingredient definitions using a bespoke culinary dictionary</p>
            <p>- Analytics and statistics logged in Airtable and Google Analytics</p>

            <p>
              My role in this project was as the lead product engineer and developer, working closely with our creative director and product team. The application was built using the React JavaScript framework to create a fluid user experience similar to a native mobile application. To manage and store the data for Mr Yum, Airtable was used as the backend for the application; this allowed for the app's data to be accessed easily by any members of the team quickly and efficiently without needing a developer on hand to help.
            </p>
          </div>
        </div>

        <div className="phone-view">
          { this.PhoneSlideshow() }
        </div>

        <div className="tablet-view">
          { this.TabletSlideshow() }
        </div>

      </div>
    )
  }
}

export default MrYum
