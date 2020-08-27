import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core'
import { useLocation } from "react-router-dom";
import API from '../../utils/API';
import Question from '../../components/Question';

const styles = {
  levelDetails: {
    marginTop: "0.5em",
    marginBottom: "0.5em"
  },
  levelCards: {
    marginTop: "1em"
  }
}

function Arena() {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");
  const [arena, setArena] = useState({name: "", score_points: "", difficulty: "", topic: ""});
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    console.log("fetching");
    API.findArena(id).then(response => {
      setArena(response.data);
      console.log("arena",response.data);
    });
  },[id]);

  useEffect(() => {
    if (arena) {
      API.findQuestions(arena.topic).then(response => {
        setQuestions(response.data);
        console.log("questions", response.data);
      });
    }
    
  },[arena])

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item container direction="column" justify="center" alignItems="center">
        <h1>{arena.name}</h1>
        <h6 style={styles.levelDetails}>Reward: {arena.score_points}</h6>
        <h6 style={styles.levelDetails}>Difficulty: {arena.difficulty}</h6>
        <h6 style={styles.levelDetails}>Subject: {arena.topic}</h6>
      </Grid>
      <Grid style={styles.levelCards} container direction="row" justify="space-around" spacing={4}>
        {questions.map(question => <Question question={question} />)}
      </Grid>
      {/*
        <ol>
        {
          questions.map(question => {
            return <li>{question.question}</li>
          })
        }
      </ol>
      */}
      
      
    </Grid>
  )
}

export default Arena