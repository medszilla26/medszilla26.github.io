import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import logo from "../assets/misc/pablo-logo.png";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={logo}
              alt="branding logo"
              style={{ height: "250px", paddingTop: "5em" }}
            />
            <div className="banner-text">
              <h1>Full Stack Developer</h1>
              <hr />
              <p>
                HTML/CSS | Bootstrap | Javascript | React | NodeJS | Express |
                MongoDB
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/pablohdzjr"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* GitHub */}
                <a
                  href="https://github.com/medszilla26"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                {/* Instagram */}
                <a
                  href="http://www.instagram.com/medszilla26"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
