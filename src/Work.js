import React from 'react'
import MrYum from './MrYum.js'

class Work extends React.Component {

  bikeOn() {
    console.log('bike on');
    document.querySelector('body').classList.add('bike')
  }

  bikeOff() {
    console.log('bike off');
    document.querySelector('body').classList.remove('bike')
  }

  render() {
    return(
      <div className="work-page">

          <h1>Work</h1>

          <p>
            My name is Evan, and I'm a developer currently living in Melbourne. I'm happiest working on front end web projects using React and cross-platform mobile applications using React Native + Expo.
          </p>

          <p>
            My most recent role has been working as the lead product engineer on a mobile web application written in React with a lean backend using Airtable to manage content, hosted using AWS.
          </p>

          <p>
             When I'm not at work, you'll probably find me on my <span
               onMouseEnter={this.bikeOn}
               onMouseLeave={this.bikeOff}
               >bike</span>.
          </p>

          <MrYum />

      </div>
    )
  }
}

export default Work
