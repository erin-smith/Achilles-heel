import React, { useEffect, useState } from "react";
import {
  Grid, Dialog, DialogTitle, DialogContent, Typography, Button
} from "@material-ui/core";
import API from "../../utils/API";
import "./style.css";
import { useStore } from "../../utils/globalState";



function Overworld() {
  const [worldState, setWorldState] = useState("");
  const [worldLevels, setWorldLevels] = useState([]);
  const [showLevel, setShowLevel] = useState([]);
  const [open, setOpen] = useState(false);

  const [state, dispatch] = useStore();

  const user = {
    email: "example@gmail.com",
    display_name: "example",
    avatar: "blank_image",
    score: 0
  }

  const styles = {
    worldContainer: {
      backgroundImage: `url(${worldState.background_image})`
    }
  };

  function loadWorld(worldName) {
    API.findOverworld(worldName)
      .then((res) => {
        setWorldState(res.data[0]);
        setWorldLevels(res.data[0].levels);
      })
    .catch((err) => console.log(err));
  }

  useEffect(() => {
    loadWorld("Greece");
    dispatch({type:"LogIn", user});
  }, []);

  function handleIconClick(evt) {
    const thisLevel = worldLevels.filter((level) => level._id === evt.target.dataset.level);
    setOpen(true);
    setShowLevel(thisLevel);
  }

  function renderDialog() {
    console.log("in render function");
    if (open) {
      return (
        <Dialog open={open}>
          <Grid container direction="row">
            <Grid item xs container direction="column" spacing={1}>
              <img src={showLevel[0].icon} width="100%" margin="0 auto" alt="level-graphic" />
            </Grid>
            <Grid item xs container direction="column" justify="center">
              <DialogTitle className="levelTitle">
                {showLevel[0].name}
              </DialogTitle>
              <Button variant="contained">Play!</Button>
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
                      The lair of the great gorgon Medusa, who turns human to
                      stone with a single glare. Enter at your own risk. This
                      text will be dynamic and generated from the db.
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Difficulty:
                      {" "}
                      {showLevel[0].difficulty}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Max Points:
                      {" "}
                      {showLevel[0].score_points}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </DialogContent>
          </Grid>
        </Dialog>
      );
    }
    return null;
  }

  // in this file, need to render the icons at specific coordinates on map
  // play button needs

  return (
    <Grid container justify="center" alignItems="center" style={styles.worldContainer} className="worldMap">
      {worldLevels.map((level) => { return (<img src={level.icon} className="icons" alt="level-icon" data-level={level._id} onClick={handleIconClick} />); })}

      {renderDialog()}
    
    </Grid>
  );
}

export default Overworld;
