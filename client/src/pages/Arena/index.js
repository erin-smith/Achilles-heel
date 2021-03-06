import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation, Redirect } from "react-router-dom";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import API from "../../utils/API";
import Question from "../../components/Question";
import { useStore } from "../../utils/globalState";
import Underworld from "../../assets/Aeneas_Sybil_Underworld.png";

const useStyles = makeStyles(() => ({
  container: {
    backgroundImage: `url(${Underworld})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "white",
    width: "100%",

    // overflowX: "hidden",
    height: "calc(100vh - 64px)",
  },
  levelCards: {
    marginTop: "1em",
  },
  levelDetails: {
    marginTop: "0.3em",
    marginBottom: "0.3em"
  },
  pointsGrid: {
    marginTop: "1.5em"
  }
}));

function Arena() {
  const classes = useStyles();
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");
  const [arena, setArena] = useState({
    name: "",
    score_points: "",
    difficulty: "",
    topic: ""
  });
  const [questions, setQuestions] = useState([]);
  const [runningScore, setRunningScore] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);
  const [returnToOverworld, setReturnToOverworld] = useState(false);
  const [state, dispatch] = useStore();
  const [numQuestionsAnswered, setNumQuestionsAnswered] = useState(0);

  useEffect(() => {
    console.log("fetching");
    API.findArena(id).then((response) => {
      setArena(response.data);
    }).catch((err) => {
      console.log(err);
    });
  }, [id]);

  useEffect(() => {
    if (arena) {
      API.findQuestions(arena.topic).then((response) => {
        setQuestions(response.data);
      });
    }
  }, [arena]);

  useEffect(() => {
    if (strikes >= 3) {
      setGameEnded(true);
    }
  }, [strikes]);

  useEffect(() => {
    if (numQuestionsAnswered >= questions.length && numQuestionsAnswered > 0) {
      setGameEnded(true);
    }
  }, [numQuestionsAnswered, questions.length]);

  function gameLost() {
    return strikes >= 3;
  }

  function onQuestionAnswered(index, correct) {
    questions[index].answered = correct;
    setNumQuestionsAnswered(numQuestionsAnswered + 1);
    if (correct) {
      setRunningScore(runningScore + questions[index].points);
    } else {
      setStrikes(strikes + 1);
    }
  }

  function handleGameEndAccept() {
    // update store
    const { user } = state;
    user.score += runningScore;
    dispatch({ type: "SetUser", user });
    // save user to db
    API.saveUser(user.display_name, user).then(() => {
      setGameEnded(false);
      setReturnToOverworld(true);
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className={classes.container}>
      <Container maxWidth="lg">
        <Grid container direction="column" justify="center" alignItems="center">
          <h1>{arena.name}</h1>
          <Grid className={classes.levelCards} container direction="row" justify="space-around" spacing={4} md={6}>
            {questions.map((question, index) => (
              <Question
                key={question.question}
                question={question}
                index={index}
                onQuestionAnswered={onQuestionAnswered}
              />
            ))}
          </Grid>
          <Grid
            item
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.pointsGrid}
          >
            <FlashOnIcon />
            {runningScore}
          </Grid>
          <Dialog open={gameEnded}>
            <DialogTitle>{ gameLost() ? "Failure" : "Victory!"}</DialogTitle>
            <DialogContent className={classes.DialogContent}>
              {
            gameLost()
              ? "Oh No! You've answered too many wrong questions. GAME OVER."
              : "You've answered all the questions! Congratulations!"
        }
            </DialogContent>
            <DialogActions>
              <Button onClick={handleGameEndAccept} color="primary">
                Ok
              </Button>
            </DialogActions>
          </Dialog>
          { returnToOverworld ? <Redirect to="/overworld" /> : null}
        </Grid>
      </Container>
    </div>
  );
}

export default Arena;
