import React, { useEffect, useState } from "react";
import {
  Grid, Dialog, DialogTitle, DialogContent, Typography, Button
} from "@material-ui/core";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import "./style.css";

function Overworld() {
  const [worldState, setWorldState] = useState("");
  const [worldLevels, setWorldLevels] = useState([]);
  const [showLevel, setShowLevel] = useState([]);
  const [open, setOpen] = useState(false);

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
  }, []);

  function handleIconClick(evt) {
    const thisLevel = worldLevels.filter((level) => level._id === evt.target.dataset.level);
    setOpen(true);
    setShowLevel(thisLevel);
  }

  function handleClose() {
    setOpen(false);
  }

  function renderDialog() {
    if (open) {
      return (
        <Dialog open={open} onClose={handleClose}>
          <Grid container direction="row">
            <Grid item xs container direction="column" spacing={1}>
              <img src={showLevel[0].icon} width="100%" margin="0 auto" alt="level-graphic" />
            </Grid>
            <Grid item xs container direction="column" justify="center" alignItems="center">
              <DialogTitle className="levelTitle">
                {showLevel[0].name}
              </DialogTitle>
              <Link to={`/arena?id=${showLevel[0]._id}`}>
                <Button size="medium" variant="contained" id={showLevel[0]._id}>Play!</Button>
              </Link>
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
                      Reward:
                      {" "}
                      {showLevel[0].score_points}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Subject:
                      {" "}
                      {showLevel[0].topic}
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
      {worldLevels.map((level) => <img src={level.icon} className="icons" alt="level-icon" key={level._id} data-level={level._id} onClick={handleIconClick} />)}

      {renderDialog()}
    
    </Grid>
  );
}

export default Overworld;
