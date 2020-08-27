import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core'
import { useLocation } from "react-router-dom";
import API from '../../utils/API';

function Arena() {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");
  const [arena, setArena] = useState({name: "", score_points: "", difficulty: "", topic: ""});

  useEffect(async () => {
    console.log("fetching");
    async function fetchData() {
      const response = await API.findArena(id);
      setArena(API.findArena(id));
      console.log(response)
    }
    fetchData();
  },[id]);

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <h1>{arena.name}</h1>
      <h2>Reward: {arena.score_points}</h2>
      <h2>Difficulty: {arena.difficulty}</h2>
      <h2>Subject: {arena.topic}</h2>
    </Grid>
  )
}

export default Arena