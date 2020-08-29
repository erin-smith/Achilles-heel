import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import API from "../../utils/API";

function Overworld() {
  const [ worldState, setWorldState ] = useState("");
  // const [ backgroundState, setBackground ] = useState("");
  const styles = {
    worldContainer: {
      backgroundImage: `url(${worldState.background_image})`,
      width: `200vw`,
      height: `100vh`,
      backgroundSize: `cover`,
      marginBottom: 0
    }
  }

  useEffect(() => {
    loadWorld("Greece")
  }, []);

  function loadWorld(worldName) {
    API.findOverworld(worldName)
    .then(res => {
      setWorldState(res.data[0]);
    })
    .catch(err => console.log(err));
  }


  return (
    <Grid container direction="column" justify="center" alignItems="center" style={styles.worldContainer}>
      {/* <h1>{worldState.name}</h1> */}
      
    </Grid>
  )
}

export default Overworld;