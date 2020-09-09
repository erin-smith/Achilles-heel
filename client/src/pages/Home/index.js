import React from "react";
import { Grid, Paper } from "@material-ui/core";
import GoogleButton from "../../components/Login/GoogleButton";

const image = {
  url: "https://i.pinimg.com/564x/69/91/99/699199779efef18eb7025491e989e006.jpg",
  title: "Ancient Greek Gods",
  width: "100%",
  marginTop: "30px",
};

function Home() {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Paper>
        <GoogleButton styles={{ marginBottom: "30px" }} />
        <div />
        <img width={image.width} src={image.url} alt="Achilles" />
      </Paper>
    </Grid>
  );
}

export default Home;
