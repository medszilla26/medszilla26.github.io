import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import headshot from "../assets/misc/headshot.jpg";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Pablo Hernandez</h2>
            <img
              src={headshot}
              alt="profile"
              style={{ height: "250px", borderRadius: "10px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              I'm baby enamel pin meditation williamsburg, pok pok drinking
              vinegar mustache id laborum. Art party kombucha crucifix flannel
              actually hashtag, ennui quinoa butcher yuccie ut. Pabst tbh
              tempor, hella iPhone kogi ea laborum consectetur kale
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-info">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Roboto Condensed" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (832) 904-1663
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Roboto Condensed" }}
                  >
                    <i
                      className="fa fa-envelope-open-text"
                      aria-hidden="true"
                    />
                    pablohdzjr@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
