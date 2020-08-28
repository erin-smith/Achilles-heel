import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import API from "../../utils/API";

const display_name = "minotaur";

const user = {
  email: "minotaur@gmail.com",
  display_name,
  score: 1
};

const updatedUser = {
  email: "minotaur@gmail.com",
  display_name,
  score: 17
};

const overworld = {
  name: "Ancient China",
  background_image: "zzzplaceholderzzz"
};

const level = {
  name: "Minotaur's Labyrinth",
  score_points: 3000,
  difficulty: "5",
  topic: "Myth_and_Legend"
};

const question = {
  question: "How are you holding up?",
  image: "zzzplaceholderimg",
  answerOptions: [
    {
      answerBody: "Good"
    },
    {
      answerBody: "Bad"
    },
    {
      answerBody: "Meh",
      isCorrect: true
    },
    {
      answerBody: "Fine"
    }
  ],
  category: "A",
  points: 100,
  topic: "Greetings"
};

function Test() {
  const [output, setOutput] = useState("");

  function out(obj) {
    setOutput(JSON.stringify(obj));
  }

  function onCreateUserClicked() {
    API.createUser(user)
      .then((response) => out(response.data))
      .catch((err) => console.log(err));
  }
  
  function onUpdateUserClicked() {
    API.saveUser(display_name, updatedUser)
      .then((response) => out(response.data))
      .catch((err) => console.log(err));
  }

  function onGetUserClicked() {
    API.getUser("reptile18")
      .then((response) => out(response.data))
      .catch((err) => console.log(err));
  }

  function onOverworldCreateClicked() {
    API.createOverworld(overworld)
      .then((response) => out(response.data))
      .catch((err) => console.log(err));
  }

  function onOverworldGetClicked() {
    API.findOverworld("Greece")
      .then((response) => out(response.data))
      .catch((err) => console.log(err));
  }

  function onLevelCreateClicked() {
    API.createArena(level)
      .then((response) => out(response.data))
      .catch((err) => console.log(err));
  }

  function onLevelGetClicked() {
    API.findArena("5f46aaa0040aa52bb0a56ce4")
      .then((response) => out(response.data))
      .catch((err) => console.log(err));
  }

  function onQuestionCreateClicked() {
    API.createQuestion(question)
      .then((response) => out(response.data))
      .catch((err) => console.log(err));
  }

  function onQuestionGetClicked() {
    API.findQuestions("Myth_and_Legend")
      .then((response) => out(response.data))
      .catch((err) => console.log(err));
  }

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12}>
        <Typography component="h2">
          User
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography component="h6">
          <button onClick={onCreateUserClicked} >Create {display_name}</button>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography component="h6">
          <button onClick={onUpdateUserClicked} >Update {display_name}</button>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography component="h6">
          <button onClick={onGetUserClicked} >Get reptile18</button>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography component="h2">
          Overworld
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography component="h6">
          <button onClick={onOverworldCreateClicked} >Create Overworld</button>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography component="h6">
          <button onClick={onOverworldGetClicked} >Get Overworld</button>
        </Typography>
      </Grid>
      {/* Arena */}
      <Grid item xs={12} sm={12}>
        <Typography component="h2">
          Arena
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography component="h6">
          <button onClick={onLevelCreateClicked} >Create Arena</button>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography component="h6">
          <button onClick={onLevelGetClicked} >Get Arena</button>
        </Typography>
      </Grid>
      {/* Question */}
      <Grid item xs={12} sm={12}>
        <Typography component="h2">
        Question
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography component="h6">
          <button onClick={onQuestionCreateClicked} >Create Question</button>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography component="h6">
          <button onClick={onQuestionGetClicked} >Get Myth &amp; Legends Question</button>
        </Typography>
      </Grid>
      {/* Output */}
      <Grid item xs={12} sm={12}>
        <Typography component="h3">
          Output
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography component="h3">
          { output }
        </Typography>
      </Grid>
      
    </Grid>
  )
}

export default Test