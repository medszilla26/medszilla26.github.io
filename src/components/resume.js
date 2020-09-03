import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
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
            <h2 style={{ paddingTop: "1em" }}>Pablo Hernandez</h2>
            <h4 styl={{ color: "grey" }}>Objective</h4>
            <hr style={{ borderTop: "3px solid #0575e6", width: "50%" }} />
            <p>
              To take a challenging role as a Front End Developer in a highly
              technical company where I can utilize my skills in Web Design,
              Front-End Web Development and use these skills in providing
              quality service to your company.
            </p>
            <hr style={{ borderTop: "3px solid #0575e6", width: "50%" }} />
            <h5>Address</h5>
            <p>Houston, Tx 77067</p>
            <h5>Phone</h5>
            <p>(832) 904-1663</p>
            <h5>Email</h5>
            <p>pablohdzjr@gmail.com</p>
            <h5>Web</h5>
            <p>example.com</p>
          </Cell>
          <Cell className="resume-right" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2020}
              endYear="present"
              schoolName="UT at Austin"
              schoolDescription="Full Stack Web Development Program"
            />
            <Education
              startYear={2004}
              endYear={2008}
              schoolName="Lone Star College - North Harris"
              schoolDescription="Graphic Design Certification Level II"
            />
            <h2>Experience</h2>
            <Experience />
            <h2>Skills</h2>
            <Skills skill="HTML/CSS" progress={85} />
            <Skills skill="JavaScript" progress={75} />
            <Skills skill="NodeJs" progress={70} />
            <Skills skill="React" progress={75} />
            <Skills skill="Illustrator" progress={90} />
            <Skills skill="Photoshop" progress={80} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
