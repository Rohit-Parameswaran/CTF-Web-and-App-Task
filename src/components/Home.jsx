import React, { Component } from "react";
import Navigation from "./Navigation";
import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Navigation type="home" />
        <main className="home-main-content">
          <div className="legacy-container">
            <div className="legacy">
              <h1>LEGACY</h1>
              Muruga Bhavan is a place for people who are very specific about
              the fine and superior quality of food and service. A beautiful and
              elegant ambiance surely makes your visit memorable. Founded by Mr.
              Palani back in 1990, we have established ourselves as a prominent
              brand. We recently completed 30 years of first-in-class service.
              We have proudly satisfied thousands of guests over the years,
              marking many of their special moments with a Wholesome treat at
              Muruga Bhavan. Every dish in our Multi-Cuisine menu is of the
              finest taste and is served to diners after a 24*7 fine work that
              our master chefs put in. The premium menu is in line with people
              of varied tastes and preferences
            </div>
          </div>
        </main>
      </>
    );
  }
}
