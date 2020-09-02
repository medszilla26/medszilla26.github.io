import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import logo from "../assets/misc/pablo-logo.png";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img src={logo} alt="branding logo" style={{ height: "200px" }} />
            </div>
          </Cell>
          <Cell className="resume-right" col={8}>
            Right Side
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
