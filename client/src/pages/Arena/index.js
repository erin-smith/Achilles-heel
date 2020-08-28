import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core'
import { useLocation } from "react-router-dom";
import API from '../../utils/API';
import Question from '../../components/Question';
// import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import BlockIcon from '@material-ui/icons/Block';

const styles = {
  levelDetails: {
    marginTop: "0.5em",
    marginBottom: "0.5em"
  },
  levelCards: {
    marginTop: "1em"
  },
  pointsGrid: {
    marginTop: "1em"
  }
}

function Arena() {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");
  const [arena, setArena] = useState({name: "", score_points: "", difficulty: "", topic: ""});
  const [questions, setQuestions] = useState([]);
  const [runningScore, setRunningScore] = useState(0);

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

  function onQuestionAnswered(index,correct, points) {
    questions[index].answered = correct;
    if (correct) {
      setRunningScore(runningScore + questions[index].points);
    }
  } 

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item container direction="column" justify="center" alignItems="center">
        <h1>{arena.name}</h1>
        <h6 style={styles.levelDetails}>Reward: {arena.score_points}</h6>
        <h6 style={styles.levelDetails}>Difficulty: {arena.difficulty}</h6>
        <h6 style={styles.levelDetails}>Subject: {arena.topic}</h6>
      </Grid>
      <Grid style={styles.levelCards} container direction="row" justify="space-around" spacing={4}>
        {questions.map((question,index) => <Question question={question} index={index} onQuestionAnswered={onQuestionAnswered} />)}
      </Grid>
      <Grid item container direction="row" justify="center" alignItems="center" style={styles.pointsGrid}>
        <FlashOnIcon />
        {runningScore}
      </Grid>
    </Grid>
  )
}

export default Arena