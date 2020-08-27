import React, {useState} from 'react';
import {Paper, Grid, Button} from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import {Dialog, DialogTitle, DialogContent } from '@material-ui/core';

const styles = {
  circleDiv: {
    borderRadius: "30px",
    fontSize: "300px"
  },
  icon: {
    fontSize: "36px"
  },
  paper: {
    backgroundColor: "#DDD",
    paddingTop: "1em",
    paddingBottom: "1em",
    paddingLeft: "0.5em",
    paddingRight: "0.5em",
    width: "10vw"
  }
}

function Question(props) {
  const [showQuestion, setShowQuestion] = useState(false);

  function onCloseQuestion() {
    // set provider?
  }

  function handleAnswerClick(correct) {
    if (correct) {
      console.log("You're right!")
    }
    else {
      console.log("You're wrong");
    }
    setShowQuestion(false);
  }

  function handlePaperClick() {
    setShowQuestion(true);
  }

  return (
    <Grid item xs={4} container justify="center">
      <Paper style={styles.paper} onClick={handlePaperClick}>
        <Grid container justify="center" alignItems="center">
          <HelpIcon style={styles.icon} />
        </Grid>
      </Paper>
      <Dialog open={showQuestion}>
        <DialogTitle>{props.question.question}</DialogTitle>
        {/* Question Picture would go here */}
        <DialogContent>
          <Grid container direction="row" spacing={1}>
            {props.question.answerOptions.map((answer) => {
              return (
                <Grid container item xs={6}>
                  <Button
                    variant="contained"
                    onClick={() => handleAnswerClick(answer.isCorrect)}
                  >{answer.answerBody}</Button>
                </Grid>
              )
            })}
          </Grid>
        </DialogContent>
      </Dialog>
    </Grid>
  )
}

export default Question