import React from "react";
import { Grid, Paper, Container } from "@material-ui/core";
import GoogleButton from "../../components/Login/GoogleButton";

const image = {
  url: "https://i.pinimg.com/564x/69/91/99/699199779efef18eb7025491e989e006.jpg",
  title: "Ancient Greek Gods",
  width: "100%",
  marginTop: "40%",
};

function Home() {
  return (
    <Container maxWidth="sm" marginTop="80px">
      <Grid>
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
          <img marginTop="100px" width={image.width} src={image.url} alt="Achilles" />
          <br />
          <GoogleButton styles={{ marginBottom: "30px" }} />
        </Paper>
      </Grid>
    </Container>
  );
}

export default Home;
