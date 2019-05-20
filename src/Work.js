import React from "react";
import MrYum from "./MrYum.js";
// import TalkAboutSomething from "./TalkAboutSomething.js";

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
          My name is <b>Evan</b>, and I'm a front end developer currently living
          in Melbourne. I've most recently been a contractor at a start-up
          accelerator, working closely with their design and product teams to
          build a cross-platform web application with <b>React</b>.
        </p>

        <p className="work-desc">
          My most recent role has seen me as the lead front end developer on a
          mobile web application called Mr Yum built with React/Redux/Saga; you
          can read more about that further down this page.
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

        {/* <TalkAboutSomething /> */}
      </div>
    );
  }
}

export default Work;
