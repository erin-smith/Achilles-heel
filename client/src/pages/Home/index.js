import React from "react";
import { Grid, Paper, Container } from "@material-ui/core";
import GoogleButton from "../../components/Login/GoogleButton";

const styles = {
  container: {
    paddingTop: "1em"
  }
};

const image = {
  url: "https://i.pinimg.com/564x/69/91/99/699199779efef18eb7025491e989e006.jpg",
  title: "Ancient Greek Gods",
  width: "100%",
  margin: "dense"
};

function Home() {
  return (
    <Container maxWidth="sm" margin="dense" style={styles.container}>
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
