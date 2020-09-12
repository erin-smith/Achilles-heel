/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from "react";
import {
  Grid,
  DialogTitle,
  DialogContent,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const font = "'Caesar Dressing', cursive";

const useStyles = makeStyles({
  levelTitle: {
    fontFamily: font,
    fontSize: "larger",
    textAlign: "center"
  },
  linkText: {
    textDecoration: "none",
  },
  playButton: {
    margin: "25px",
    backgroundColor: "#ac6b53",
    color: "white",
  },
  gameDescription: {
    marginBottom: "20px"
  },
  gameItems: {
    margin: "5px",
  },
  icons: {
    margin: "10px",
  },
});

function LevelDialog(props) {
  const classes = useStyles();
  return (
    <Grid container direction="row">
      <Grid
        item
        md
        container
        direction="column"
        spacing={1}
        justify="center"
        alignItems="center"
        className={classes.icons}
      >
        <img
          src={props.thisLevel.iconUrl}
          width="50%"
          height="100%"
          margin="0 auto"
          alt="level-graphic"
        />
      </Grid>
      <Grid
        item
        md
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item md container direction="row" alignItems="center" justifyContent="center">
          <DialogTitle variant="h1" alignItems="center" justifyContent="center">
            <Typography className={classes.levelTitle}>
              {props.thisLevel.name}
            </Typography>
          </DialogTitle>
        </Grid>
        <DialogContent>
          <Grid item md container direction="row" gutterBottom>
            <Typography className={classes.gameDescription}>
              {props.thisLevel.description}
            </Typography>
          </Grid>
          <Grid item md container direction="row">
            <Grid item xs container direction="col">
              {/* <Grid item md> */}
              <Typography
                variant="body2"
                gutterBottom
                className={classes.gameItem}
              >
                <strong>Difficulty:</strong>
                {" "}
                {props.thisLevel.difficulty}
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                className={classes.gameItem}
              >
                <strong>Reward:</strong>
                {props.thisLevel.score_points}
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                className={classes.gameItem}
              >
                <strong>Subject:</strong>
                {" "}
                {props.thisLevel.topic}
              </Typography>
            </Grid>
            <Grid item xs container direction="column" spacing={2}>
              <Link
                className={classes.linkText}
                to={`/${props.thisLevel.routeName}?id=${props.thisLevel._id}`}
              >
                <Button
                  className={classes.playButton}
                  size="medium"
                  variant="contained"
                >
                  Play!
                </Button>
              </Link>
            </Grid>
          </Grid>
        </DialogContent>
      </Grid>
    </Grid>
  );
}

export default LevelDialog;
