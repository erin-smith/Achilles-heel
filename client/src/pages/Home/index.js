import React from "react";
import { Grid, Paper, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GoogleButton from "../../components/Login/GoogleButton";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    flexGrow: 1,
    margin: "60px",
  }
}));

const image = {
  url: "https://i.pinimg.com/564x/69/91/99/699199779efef18eb7025491e989e006.jpg",
  title: "Ancient Greek Gods",
  width: "100%",
  margin: "dense"
};

function Home() {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" margin="dense">
      <Grid className={classes.grid}>
        <br />
      </Grid>
      <Grid>
        <br />
      </Grid>
      <Grid>
        <br />
      </Grid>
      <Grid>
        <Paper>
          <div />
        </Paper>
        <Paper styles={{ justifyContent: "center" }}>
          <img margin="dense" width={image.width} src={image.url} alt="Achilles" />
          <br />
          <GoogleButton styles={{ marginBottom: "30px" }} />
        </Paper>
      </Grid>
    </Container>
  );
}

export default Home;
