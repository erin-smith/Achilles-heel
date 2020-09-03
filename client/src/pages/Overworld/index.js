/* eslint-disable max-len */
import React, { useEffect, useState } from "react";
import {
  Grid, Dialog, DialogTitle, DialogContent, Typography, Button, StepIcon
} from "@material-ui/core";
import {
  Map, TileLayer, Marker
} from "react-leaflet";
import { Icon } from "leaflet";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import "./style.css";

function Overworld() {
  const [worldState, setWorldState] = useState("");
  const [worldLevels, setWorldLevels] = useState([]);
  const [showLevel, setShowLevel] = useState([]);
  const [open, setOpen] = useState(false);
  const [mapNames, setMapNames] = useState([]);

  function loadWorld(worldName) {
    API.findOverworld(worldName)
      .then((res) => {
        setWorldState(res.data[0]);
        setWorldLevels(res.data[0].levels);
        setMapNames(res.data[0].mapNames);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    loadWorld("Greece");
  }, []);

  function handleIconClick(evt) {
    const thisLevel = worldLevels.filter((level) => level.routeName === evt.target.options.id);
    console.log(thisLevel);
    setOpen(true);
    setShowLevel(thisLevel);
  }

  function handleClose() {
    setOpen(false);
  }

  function renderDialog() {
    console.log("hitting render dialog");
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

  function createIcon(name) {
    const customIcon = new Icon({
      iconUrl: name.url,
      iconSize: name.size
    });
    return customIcon;
  }

  return (
    <Map center={worldState.mapCenter} zoom={7} maxBounds={worldState.mapBounds} minZoom={6} dragging>
      <TileLayer url={`https://api.mapbox.com/styles/v1/alexastef/${worldState.mapStyle}/tiles/256/{z}/{x}/{y}@2x?access_token=${worldState.mapToken}`} />
      {mapNames.map((name) => <Marker position={name.position} icon={createIcon(name)} />)}
      {worldLevels.map((level) => <Marker position={level.geometry.coordinates} icon={createIcon(level.icon)} id={level.routeName} onClick={handleIconClick} />)}
      {renderDialog}
    </Map>
  );
}

export default Overworld;
