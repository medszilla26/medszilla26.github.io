import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import logo from "../assets/misc/pablo-logo.png";

class Resume extends Component {
  render() {
    return (
      <div className="aboutme-body">
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img src={logo} alt="branding logo" style={{ height: "200px" }} />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Pablo Hernandez</h2>
            <h4 styl={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Pabst tbh tempor, hella lumbersexual iPhone kogi ea laborum
              consectetur kale chips ex af esse elit.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Houston, Tx 77067</p>
            <h5>Phone</h5>
            <p>(832)904-1663</p>
            <h5>Email</h5>
            <p>pablohdzjr@gmail.com</p>
            <h5>website</h5>
            <p>example.com</p>
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
