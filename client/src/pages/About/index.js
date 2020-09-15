/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./style.css";
import { Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="backgroundImage">
      <Container maxWidth="md" className="aboutSection">
        <Grid container direction="row" justify="center" alignItems="center">
          <h3 className="aboutHeader">About Achilles' Heel</h3>
          <p>
            Achilles' Heel is a mythical game app designed to transport players to a different time, full of excitement and adventure. We all need a break from daily life sometimes, especially these days, so our founders wanted to provide an outlet for people where they could play, learn, and gather. They were inspired by Ancient Greece - the myths and magic, the art, the landscape, the knowledge, and the agora. The game is meant to be educational yet fun with something for everyone.
          </p>
          <p>
            Play through all the levels to learn about different facets of Ancient Greece and its mythology. Learn the flute with Pan, match the gods with their symbols, and defeat the villains of the Underworld in a test of knowledge. Earn points and fame as your travel across the map.
          </p>
        </Grid>
        <br />
        <Grid container direction="row" justify="center" alignItems="center">
          <h3 className="aboutCreators">About the Creators</h3>
          <p>Achilles' Heel was created by Johnny Li, Matt Moncayo, Erin Smith, and Alexa Stefankiewicz. This is the second project the team built together.</p>
        </Grid>
        <br />
        <Grid container direction="row" justify="center" alignItems="center">
          <h3 className="whatsNext">What's Next for Achilles' Heel</h3>
          <Grid container direction="row" justify="center" alignItems="center">
            <h4>So much to explore!</h4>
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center">
            <ul className="comingSoon">
              <li className="newFeature">New levels in Ancient Greece</li>
              <li className="newFeature">New worlds to visit</li>
              <li className="newFeature">Multi-player experience</li>
              <li className="newFeature">Points store</li>
              <li className="newFeature">Build your own avatar</li>
              <li className="newFeature">Native app</li>
            </ul>
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <p>
            <ul className="legalLinks" float="bottom">
              <Link to="/credits"><li className="legalLink">Credits</li></Link>
              <Link to="/tos"><li className="legalLink">Terms of Service</li></Link>
              <Link to="/privacy"><li className="legalLink">Privacy Policy</li></Link>
            </ul>
          </p>
        </Grid>
      </Container>
    </div>
  );
}

export default About;
