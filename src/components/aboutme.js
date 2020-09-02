import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import headshot from "../assets/misc/headshot.jpg";

class About extends Component {
  render() {
    return (
      <div>
        <div className="aboutme-body">
          <Grid className="aboutme-grid">
            <Cell col={6}>
              <h2>Pablo Hernandez</h2>
              <img
                src={headshot}
                alt="profile"
                style={{ height: "250px", borderRadius: "10px" }}
              />
              <p>
                My name is Pablo Hernandez, I am currently attending the UT
                Austin Coding Bootcamp program. I enjoy the challenges it brings
                and am always excited to learn new things.
              </p>
              <p>
                Currently I am a TSA Officer, have been for 9 years now. Besides
                doing officer floor work I have also coached and trained new
                officers and worked in the logistics department.
              </p>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default About;
