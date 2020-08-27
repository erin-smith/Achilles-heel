import React, { useState } from 'react';
import API from '../../utils/API';
import { Grid, Typography } from '@material-ui/core'

const display_name = "minotaur";

const user = {
  email: "minotaur@gmail.com",
  display_name: display_name,
  score: 1
}

const updatedUser = {
  email: "minotaur@gmail.com",
  display_name: display_name,
  score: 17
}

const overworld = {
  name: "Ancient China",
  background_image: "zzzplaceholderzzz"
}

const level = {
  "name": "Minotaur's Labyrinth",
  "score_points": 3000,
  "difficulty": "5",
  "topic": "Myth_and_Legend"
}

const question = {
  "question": "How are you holding up?",
  "image": "zzzplaceholderimg",
  "answerOptions": [
      {
          "answerBody": "Good"
      },
      {
          "answerBody": "Bad"
      },
      {
          "answerBody": "Meh",
          "isCorrect": true
      },
      {
          "answerBody": "Fine"
      }
  ],
  "category": "A",
  "points": 100,
  "topic": "Greetings"
}


function Test() {
  const [output,setOutput] = useState("");
  
  async function onCreateUserClicked() {
    out(await API.createUser(user))
  }
  
  async function onUpdateUserClicked() {
    out(await API.saveUser(display_name, updatedUser));
  }

  async function onGetUserClicked() {
    out(await API.getUser("reptile18"));
  }

  async function onOverworldCreateClicked() {
    out(await API.createOverworld(overworld));
  }

  async function onOverworldGetClicked() {
    out(await API.findOverworld("Greece"));
  }

  async function onLevelCreateClicked() {
    out(await API.createArena(level));
  }

  async function onLevelGetClicked() {
    out(await API.findArena("5f46a4fd9b23dc854cb46a27"));
  }

  async function onQuestionCreateClicked() {
    out(await API.createQuestion(question));
  }

  async function onQuestionGetClicked() {
    out(await API.findQuestions("Myth_and_Legend"))
  }

  function out(obj) {
    setOutput(JSON.stringify(obj));
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