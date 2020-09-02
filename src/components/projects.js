import React, { Component } from "react";
import passgen from "../assets/projects/PasswordGenerator.png";
import burger from "../assets/projects/BurgerApp.png";
import quiz from "../assets/projects/CodeQuiz.png";
import readme from "../assets/projects/ReadMeGen.png";

import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  CardMenu,
  Button,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Password Generator */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "200px",
                background: `url(${passgen})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              Password Generator
            </CardTitle>
            <CardText>Project Description</CardText>
            <CardActions border>
              <Button
                ripple
                href="https://github.com/medszilla26/password-generator"
                target="blank"
              >
                GitHub
              </Button>
              <Button
                ripple
                href="https://medszilla26.github.io/password-generator/"
                target="blank"
              >
                Live Site
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Eat-Da-Burger */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "200px",
                background: `url(${burger})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              Eat-Da-Burger!
            </CardTitle>
            <CardText>Project Description</CardText>
            <CardActions border>
              <Button
                ripple
                href="https://github.com/medszilla26/eat-da-burger"
                target="blank"
              >
                GitHub
              </Button>
              <Button
                ripple
                href="https://fierce-eyrie-21522.herokuapp.com/"
                target="blank"
              >
                Live Site
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Code Quiz */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "200px",
                background: `url(${quiz})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              Code Quiz
            </CardTitle>
            <CardText>Project Description</CardText>
            <CardActions border>
              <Button
                ripple
                href="https://github.com/medszilla26/timed-code-quiz"
                target="blank"
              >
                GitHub
              </Button>
              <Button
                ripple
                href="https://medszilla26.github.io/timed-code-quiz/"
                target="blank"
              >
                Live Site
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is Group Projects</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is Side Projects</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Projects</Tab>
          <Tab>Group Projects</Tab>
          <Tab>Side Projects</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()} </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Projects;
