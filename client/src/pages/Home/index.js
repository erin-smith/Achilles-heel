import React from 'react';
import { Grid, Paper } from '@material-ui/core'
import GoogleLogin from 'react-google-login';

function Home() {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <h1>Achilles' Heel</h1>
      <Paper>
        Placeholder for Image
      </Paper>
      <GoogleLogin />
    </Grid>
  )
}

export default Home