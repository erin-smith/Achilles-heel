import React, { useState } from "react";
import {
  Paper,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent
} from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import Vase from "../../assets/vase.png";
import "./style.css";

const styles = {
  circleDiv: {
    borderRadius: "30px",
    fontSize: "300px",
    backgroundColor: "white",
  },
  icon: {
    fontSize: "36px",
  },
  dialog: {
    backgroundColor: "#d9d5d7",
  },
  dialogContent: {
    paddingBottom: "15px",
    backgroundColor: "#d9d5d7",
  },
  dialogButton: {
    backgroundColor: "#68a0e1",
    color: "white",
    flexGrow: 1,
  },
  paper: {
    backgroundImage: `url(${Vase})`,
    paddingTop: "1.5em",
    paddingBottom: "1.5em",
    backgroundColor: "skyblue",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "80% 70%"
  }
};

function Question(props) {
  const [showQuestion, setShowQuestion] = useState(false);

  function handleAnswerClick(correct) {
    if (correct) {
      console.log("You're right!");
    } else {
      console.log("You're wrong");
    }
    setShowQuestion(false);
    props.onQuestionAnswered(props.index, correct);
  }

  function handlePaperClick() {
    setShowQuestion(true);
  }

  return (
    <Grid item xs={4} container justify="center">
      <Paper
        id="vase"
        className="cardSize"
        style={styles.paper}
        onClick={props.question.answered === undefined ? handlePaperClick : null}
      >
        <Grid container justify="center" alignItems="center">
          { props.question.answered !== undefined ? props.question.answered === true ? <CheckCircleIcon className="icon right" /> : <CancelIcon className="icon wrong" /> : <HelpIcon className="icon" />}
        </Grid>
      </Paper>
      <Dialog open={showQuestion}>
        <DialogTitle style={styles.dialog}>{props.question.question}</DialogTitle>
        {/* Question Picture would go here */}
        <DialogContent style={styles.dialogContent}>
          <Grid container direction="row" spacing={1}>
            {props.question.answerOptions.map((answer) => (
              <Grid container item xs={6} key={answer.answerBody}>
                <Button
                  variant="contained"
                  onClick={() => handleAnswerClick(answer.isCorrect)}
                  style={styles.dialogButton}
                >
                  {answer.answerBody}
                </Button>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
      </Dialog>
    </Grid>
  );
}

export default Question;
