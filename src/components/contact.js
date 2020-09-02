import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
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
