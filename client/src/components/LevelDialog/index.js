/* eslint-disable react/prop-types */
import React from "react";
import {
  Grid, DialogTitle, DialogContent, Typography, Button
} from "@material-ui/core";
// import { Link } from "react-router-dom";

function LevelDialog(props) {
  return (
    <>
      <Grid container direction="row">
        <Grid item xs container direction="column" spacing={1}>
          <img src={props.thisLevel.iconUrl} width="100%" margin="0 auto" alt="level-graphic" />
        </Grid>
        <Grid item xs container direction="column" justify="center" alignItems="center">
          <DialogTitle className="levelTitle">
            {props.thisLevel.name}
          </DialogTitle>
          {/* <Link to={`/arena?id=${showLevel[0]._id}`}> */}
          <Button size="medium" variant="contained">Play!</Button>
          {/* </Link> */}
        </Grid>
      </Grid>
      <Grid container direction="row">
        <DialogContent>
          <Grid
            item
            xs={12}
            sm
            container
            alignItems="center"
            justify="center"
          >
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {props.thisLevel.description}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Difficulty:
                  {" "}
                  {props.thisLevel.difficulty}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Reward:
                  {" "}
                  {props.thisLevel.score_points}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Subject:
                  {" "}
                  {props.thisLevel.topic}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Grid>
    </>
  );
}

export default LevelDialog;
