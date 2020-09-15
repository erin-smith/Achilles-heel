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
            <strong>Achilles' Heel</strong>
            &nbsp;
            is a mythical game app transporting players to a vibrant cultural renaissance of adventure!
          </p>
          <p>
            Most people know of "Achilles' Heel" as a flaw.  But in Ancient Greece, Achilles was dipped into the River Styx by the heel, which saved his life.
            During 2020, we could all use a life-saver or break from pandemic daily life. And many of us miss the Summer Olympics!
          </p>
          <p>
            <strong>Enter Achilles' Heel:</strong>
            &nbsp;
            an outlet for all-ages to play, learn, and gather. We were inspired by Ancient Greece - the myth, magic, art, landscape, history, and the agora. The game is educational yet fun with something for everyone.
          </p>
          <p>
            Come and play with us through each level to learn about different facets of Ancient Greece and mythology. Learn the flute with Pan, match the gods with their symbols, and defeat the villains of the Underworld in a test of knowledge. Earn points and fame as your travel across the map.
          </p>
        </Grid>
        <br />
        <Grid container direction="row" justify="center" alignItems="center">
          <h3 className="aboutCreators">About the Creators</h3>
          <p>Achilles' Heel was created by:&nbsp; Johnny Li, Matt Moncayo, Erin Smith, and Alexa Stefankiewicz.&nbsp;This is the second project this team has built together.</p>
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
              <Link to="/credits"><li className="legalLink"><strong>Credits</strong></li></Link>
              <Link to="/tos"><li className="legalLink"><strong>Terms of Service</strong></li></Link>
              <Link to="/privacy"><li className="legalLink"><strong>Privacy Policy</strong></li></Link>
            </ul>
          </p>
        </Grid>
      </Container>
    </div>
  );
}

export default About;
