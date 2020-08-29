import React from "react";
import { Grid, Paper } from "@material-ui/core";
import GoogleButton from "../../components/Login/GoogleButton";

function Home() {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <h1>Achilles&apos; Heel</h1>
      <Paper>
        Placeholder for Image
      </Paper>
      <GoogleButton />
    </Grid>
  );
}

export default Home;
