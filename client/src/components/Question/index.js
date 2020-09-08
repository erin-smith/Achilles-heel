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
import "./style.css";

const styles = {
  circleDiv: {
    borderRadius: "30px",
    fontSize: "300px"
  },
  icon: {
    fontSize: "36px"
  },
  paper: {
    backgroundColor: "#68a0e1",
    paddingTop: "1.5em",
    paddingBottom: "1.5em",
    paddingLeft: "0.5em",
    paddingRight: "0.5em",
    width: "10vw"
  },
  dialog: {
    backgroundColor: "#d9d5d7"
  },
  dialogButton: {
    backgroundColor: "#68a0e1",
    color: "white"
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
        <DialogContent style={styles.dialog}>
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
