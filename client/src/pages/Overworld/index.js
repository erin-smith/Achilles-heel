/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import React, { useEffect, useState } from "react";
import { Dialog } from "@material-ui/core";
import {
  Map, TileLayer, Marker
} from "react-leaflet";
import { Icon } from "leaflet";
import LevelDialog from "../../components/LevelDialog";
import API from "../../utils/API";
import "./style.css";

function Overworld() {
  const [worldState, setWorldState] = useState("");
  const [worldLevels, setWorldLevels] = useState([]);
  const [showLevel, setShowLevel] = useState({});
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

  function handleClose() {
    setOpen(false);
  }

  function handleIconClick(evt) {
    const thisLevel = worldLevels.filter((level) => level.routeName === evt.target.options.id);
    setOpen(true);
    setShowLevel(thisLevel[0]);
  }

  function createIcon(url, size) {
    const customIcon = new Icon({
      iconUrl: url,
      iconSize: size
    });
    return customIcon;
  }

  return (
    <Map center={worldState.mapCenter} zoom={7} maxBounds={worldState.mapBounds} minZoom={6} dragging="true">
      <TileLayer url={`https://api.mapbox.com/styles/v1/alexastef/${worldState.mapStyle}/tiles/256/{z}/{x}/{y}@2x?access_token=${worldState.mapToken}`} />

      {mapNames.map((name) => <Marker position={name.position} icon={createIcon(name.url, name.size)} key={name} />)}

      {worldLevels.map((level) => (
        <Marker position={level.geometry.coordinates} icon={createIcon(level.iconUrl, level.iconSize)} key={level._id} id={level.routeName} onClick={handleIconClick}>
          <Dialog open={open} onClose={handleClose}>
            <LevelDialog thisLevel={showLevel} />
          </Dialog>
        </Marker>
      ))}
    </Map>
  );
}

export default Overworld;
