import React from "react";
import MrYum from "./MrYum.js";
import TalkAboutSomething from "./TalkAboutSomething.js";

class Work extends React.Component {
  bikeOn() {
    console.log("bike on");
    document.querySelector("body").classList.add("bike");
  }

  bikeOff() {
    console.log("bike off");
    document.querySelector("body").classList.remove("bike");
  }

  render() {
    return (
      <div className="work-page">
        <div className="dots">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <h1 className="work-header">Work</h1>

        <p className="work-desc">
          My name is Evan, and I'm a developer currently living in Melbourne.
          I'm happiest building front end web projects with React and
          cross-platform mobile applications utilizing React Native + Expo, but
          I've also had experience in doing backend work with Node Express
          servers.
        </p>

        <p className="work-desc">
          My most recent role has been working as the lead front end developer
          on a mobile web application built with React/Redux/Saga with a lean
          backend using an Express server Ec2 instance to handle API calls, and
          a Postgres server to manage content; all hosted and distributed with
          AWS.
        </p>

        <p className="work-desc">
          When I'm not at work, you'll probably find me on my
          <span onMouseEnter={this.bikeOn} onMouseLeave={this.bikeOff}>
            {" "}
            bike
          </span>
          .
        </p>

        <MrYum />

        <TalkAboutSomething />
      </div>
    );
  }
}

export default Work;
