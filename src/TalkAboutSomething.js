import React from 'react'

class TalkAboutSomething extends React.Component {

  render() {
    return(
      <div className="t-a-s">

          <div className="heading">
            <h1>Talk About Something</h1>
            <h3>Personal Project</h3>
            <h3>Ruby on Rails, JavaScript, PostgreSQL</h3>
          </div>

          <div className="body">
            <div>
              <p>
                Talk About Something is an imageboard-style website built as a course project during my time at General Assembly's Web Development Immersive course. The website allows users to create accounts, upload images, post comments and reply to threads.
              </p>
            </div>

            <div>
              <p><b>&rarr;</b> Secure user-authentication with salted passwords and sessions</p>
              <p><b>&rarr;</b> Data storage with PostgreSQL for CRUD[Create, Read, Update, Delete] functionality</p>
              <p><b>&rarr;</b> Routing using Ruby on Rails</p>
            </div>

            <div>
              <p>
                This project was used to showcase an understanding of using Ruby on Rails and PostgreSQL to build a secure CRUD application that handles multiple users. It was bootstrapped with Padrino, run on a Puma server, and had data stored on a PostgreSQL database. 
              </p>
            </div>
          </div>


        <div className="phone-view"></div>

        <div className="tablet-view"></div>

      </div>
    )
  }
}

export default TalkAboutSomething
