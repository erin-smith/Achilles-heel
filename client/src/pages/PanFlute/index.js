import React, { useState, useEffect } from "react";
import { Button, Typography } from "@material-ui/core";
import "./style.css";
import { set } from "mongoose";

function PanFlute() {
  const [aiNotes, SetAiNotes] = useState([]);
  const [aiTimer, setAITimer] = useState(null);
  const [aiNextNoteIndex, setaiNextNoteIndex] = useState(-1);
  const [currentPlayerNotes, SetCurrentPlayerNotes] = useState([]);
  const [currentPlayerTimer, setCurrentPlayerTimer] = useState(null);
  const [currentPlayerDelay, SetCurrentPlayerDelay] = useState(2000);
  const [playerNextNoteIndex, setPlayerNextNoteIndex] = useState(-1);
  const [currentPlayerNextKeyHit, setCurrentPlayerNextKeyHit] = useState(false);
  const [playersTurn, SetPlayersTurn] = useState(true);
  const [pipes, setPipes] = useState([]);
  const [gameOn, setGameOn] = useState(false);
  const [log, setLog] = useState("");
  const DELAY_BETWEEN_TURNS = 1000;

  useEffect(() => {
    setPipes(document.getElementsByClassName("pipe"));
  }, []);

  useEffect(() => {
    // console.log(playersTurn ? "YOUR TURN" : "PAN'S TURN");
    // console.log({pipes});
    if (gameOn) {
      if (playersTurn) {
        SetCurrentPlayerNotes([]);
      } else {
        // console.log("setting ai next note to 0 from ", aiNextNoteIndex);
        setaiNextNoteIndex(0);
        SetCurrentPlayerDelay(currentPlayerDelay - 25);
      }
    }
  }, [playersTurn]);

  // listens for aiNextNoteIndex changing and plays the note
  useEffect(() => {
    // let nextNoteTimer = null;
    if (gameOn && !playersTurn) {
      if (aiNextNoteIndex <= aiNotes.length) {
        // console.log("[top] aiNextNoteIndex", aiNextNoteIndex);
        // console.log("[top] aiNotes.length", aiNotes.length);
        if (aiNextNoteIndex === aiNotes.length) {
          // random next note
          const randomNote = Math.floor(Math.random() * (pipes.length));
          playNote(randomNote);
          setTimeout(() => {
            SetPlayersTurn(true);
            // console.log("TIMEOUT Pan's turn ends");
            aiNotes.push(randomNote);
            SetAiNotes(aiNotes);
            setPlayerNextNoteIndex(-1); // IS THIS WRONG?
            setaiNextNoteIndex(aiNextNoteIndex + 1);
          }, DELAY_BETWEEN_TURNS);
        } else {
          // console.log("playing next note");
          playNote(aiNotes[aiNextNoteIndex]);
        }
        if (aiNextNoteIndex < aiNotes.length) {
          // console.log("decided to play another note", "aiNextNoteIndex", aiNextNoteIndex, "aiNotes.length", aiNotes.length);
          setAITimer(setTimeout(() => {
            // console.log("setting next timeout note play");
            setaiNextNoteIndex(aiNextNoteIndex + 1);
          }, currentPlayerDelay));
        }
      }
    }
    return () => clearTimeout(aiTimer);
  }, [aiNextNoteIndex]);

  useEffect(() => {
    clearTimeout(currentPlayerTimer);

    // console.log("Which Note: ", playerNextNoteIndex);
    // console.log("aiNotes", aiNotes);
    // console.log("playerNotes", currentPlayerNotes);
    // console.log("My Note: ", typeof currentPlayerNotes[playerNextNoteIndex], currentPlayerNotes[playerNextNoteIndex]);
    // console.log("His Note: ", typeof aiNotes[playerNextNoteIndex], aiNotes[playerNextNoteIndex]);

    if (currentPlayerNotes[playerNextNoteIndex] !== aiNotes[playerNextNoteIndex]) {
      setLog("WRONG NOTE");
      setGameOn(false);
    }
    if (playerNextNoteIndex < aiNotes.length - 1) {
      // listen for next key or fail
      setCurrentPlayerTimer(setTimeout(() => {
        // console.log("fail");
        setLog("RAN OUT OF TIME");
        setGameOn(false);
      }, currentPlayerDelay));
    }
    else {
      // matched all the notes
      setTimeout(() => {
        // console.log("matched all notes");
        SetPlayersTurn(false);
      }, DELAY_BETWEEN_TURNS);
    }

    return () => clearTimeout(currentPlayerTimer);
  }, [playerNextNoteIndex]);

  function start() {
    // console.log("starting game");
    SetAiNotes([]);
    SetCurrentPlayerNotes([]);
    // console.log("setting ai next note to 0 from ", aiNextNoteIndex);
    setaiNextNoteIndex(0);
    SetCurrentPlayerDelay(1000);

    setGameOn(true);
    SetPlayersTurn(false);
    setLog("");
  }

  function onPipeClicked(e) {
    // console.log("gameOn", gameOn);
    // console.log("playersTurn", playersTurn);
    if (playersTurn) {
      clearTimeout(currentPlayerTimer);
      const { id, pos } = e.target.dataset;
      const pipe = e.target;
      pipe.classList.add(`cls-${id}`);
      pipe.classList.remove(`cls-${1}`);
      setTimeout(() => {
        pipe.classList.remove(`cls-${id}`);
        pipe.classList.add(`cls-${1}`);
      }, 500);

      // console.log("player clicked pos", pos, "id", id);

      // for now just continue to ai's playersTurn
      if (gameOn) {
        currentPlayerNotes.push(parseInt(pos));
        // console.log("New PLayer Notes", currentPlayerNotes);
        SetCurrentPlayerNotes(currentPlayerNotes);
        setPlayerNextNoteIndex(playerNextNoteIndex + 1);
      }
    }
  }

  function playNote(note) {
    const pipe = pipes[note];
    const { id } = pipe.dataset;
    pipe.classList.add(`cls-${id}`);
    pipe.classList.remove(`cls-${1}`);
    setTimeout(() => {
      pipe.classList.remove(`cls-${id}`);
      pipe.classList.add(`cls-${1}`);
    }, 500);
  }

  function stop() {
    clearInterval(aiTimer);
    clearTimeout(currentPlayerTimer);
    SetPlayersTurn(true);
    setaiNextNoteIndex(aiNextNoteIndex.length + 1);
    setGameOn(false);
  }

  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="284.47" height="285.34" viewBox="0 0 284.47 285.34">
        <g id="Flute">
          <g>
            <path onClick={onPipeClicked} data-pos={0} data-id="3" className="cls-1 pipe" d="M25.81,19.87H56v6.72q0,132.33,0,264.65c0,10.86-2.09,13.46-10.79,13.47-3.81,0-7.61.1-11.42,0-5.13-.18-7.6-3.16-7.95-9.42-.1-1.85,0-3.71,0-5.57V19.87Z" transform="translate(-13.1 -19.41)" />
            <path onClick={onPipeClicked} data-pos={1} data-id="4" className="cls-1 pipe" d="M63.67,19.87H93.93V265.43c0,10.28-1.85,12.6-10,12.65-4,0-8,.1-12,0-5.68-.2-8-3.27-8.21-10.61,0-1.05,0-2.11,0-3.17V19.87Z" transform="translate(-13.1 -19.41)" />
            <path onClick={onPipeClicked} data-pos={2} data-id="5" className="cls-1 pipe" d="M101.89,19.87H132c.1,2.44.27,4.71.27,7q0,111.61,0,223.22c0,11.62-1.72,13.74-10.88,13.75-3.67,0-7.33.05-11,0-5.81-.12-8.38-3.5-8.5-11.14-.05-3.66,0-7.31,0-11V19.87Z" transform="translate(-13.1 -19.41)" />
            <path onClick={onPipeClicked} data-pos={3} data-id="6" className="cls-1 pipe" d="M140.17,19.87H170.8v7.39q0,103.34,0,206.69c0,11.92-2.05,14.57-11.23,14.58-3.67,0-7.34.11-11,0-5.62-.2-8.1-3.52-8.39-11,0-1.1,0-2.19,0-3.29V19.87Z" transform="translate(-13.1 -19.41)" />
            <path onClick={onPipeClicked} data-pos={4} data-id="7" className="cls-1 pipe" d="M178.7,19.41H209v7.4q0,97,0,194c0,10.7-2.17,13.67-10,13.73-3.67,0-7.33.05-11,0-6.94-.1-9.24-3.14-9.24-12.57q0-66.33,0-132.68,0-31,0-62Z" transform="translate(-13.1 -19.41)" />
            <path onClick={onPipeClicked} data-pos={5} data-id="8" className="cls-1 pipe" d="M216.88,19.87h30.2V208.2c0,12.62-1.49,14.6-10.75,14.61-4,0-8,.1-12,0-4.85-.18-7.19-3.5-7.44-10.24,0-1.6,0-3.2,0-4.8V19.87Z" transform="translate(-13.1 -19.41)" />
            <path onClick={onPipeClicked} data-pos={6} data-id="9" className="cls-1 pipe" d="M255,19.64h30.62v7.8q0,80.43,0,160.86c0,13.63-1.93,16.37-11.28,16.37-3.33,0-6.66,0-10,0-6.61-.1-9.33-3.93-9.34-13.45q0-45.9,0-91.82Z" transform="translate(-13.1 -19.41)" />
            <path className="cls-2" d="M13.1,70.25V49.33H297.57V70.25ZM85.83,59.81A6.72,6.72,0,0,0,79,52.76a7,7,0,1,0,0,14A6.73,6.73,0,0,0,85.83,59.81ZM124,59.63c-.08-4.19-2.81-6.91-6.91-6.88a7,7,0,1,0,.33,14C121.5,66.67,124.08,63.86,124,59.63Zm114.93.1a6.67,6.67,0,0,0-6.86-7,7,7,0,1,0,.1,14A6.66,6.66,0,0,0,238.94,59.73Zm24.24-.36a7.17,7.17,0,0,0,6.53,7.42c4.19.27,7.06-2.2,7.36-6.33.31-4.33-2-7.29-6-7.68A7.1,7.1,0,0,0,263.18,59.37Zm-215.55.4a6.91,6.91,0,0,0-6.93-7c-4.24-.06-7.13,2.94-7,7.29a6.61,6.61,0,0,0,7,6.76A7,7,0,0,0,47.63,59.77Zm114.85-.19a6.89,6.89,0,0,0-7.1-6.83c-4.25,0-7,3.06-6.75,7.5.2,4.14,3,6.7,7.17,6.54A6.91,6.91,0,0,0,162.48,59.58Zm38.37.15a7.15,7.15,0,0,0-7-7c-4.29,0-7.09,2.93-6.92,7.35.15,4.15,2.94,6.8,7.05,6.7A7.13,7.13,0,0,0,200.85,59.73Z" transform="translate(-13.1 -19.41)" />
          </g>
        </g>
        <g id="Buttons">
          <path className="cls-3" d="M47.63,59.77a7,7,0,0,1-6.9,7,6.61,6.61,0,0,1-7-6.76c-.13-4.35,2.76-7.35,7-7.29A6.91,6.91,0,0,1,47.63,59.77Z" transform="translate(-13.1 -19.41)" />
          <path className="cls-4" d="M85.83,59.81a6.73,6.73,0,0,1-6.88,7,7,7,0,1,1,0-14A6.72,6.72,0,0,1,85.83,59.81Z" transform="translate(-13.1 -19.41)" />
          <path className="cls-5" d="M124,59.63c.07,4.23-2.51,7-6.58,7.17a7,7,0,1,1-.33-14C121.2,52.72,123.93,55.44,124,59.63Z" transform="translate(-13.1 -19.41)" />
          <path className="cls-6" d="M162.48,59.58a6.91,6.91,0,0,1-6.68,7.21c-4.16.16-7-2.4-7.17-6.54-.22-4.44,2.5-7.47,6.75-7.5A6.89,6.89,0,0,1,162.48,59.58Z" transform="translate(-13.1 -19.41)" />
          <path className="cls-7" d="M200.85,59.73a7.13,7.13,0,0,1-6.91,7.07c-4.11.1-6.9-2.55-7.05-6.7-.17-4.42,2.63-7.39,6.92-7.35A7.15,7.15,0,0,1,200.85,59.73Z" transform="translate(-13.1 -19.41)" />
          <path className="cls-8" d="M238.94,59.73a6.66,6.66,0,0,1-6.76,7.07,7,7,0,1,1-.1-14A6.67,6.67,0,0,1,238.94,59.73Z" transform="translate(-13.1 -19.41)" />
          <path className="cls-9" d="M263.18,59.37a7.1,7.1,0,0,1,7.88-6.59c4,.39,6.32,3.35,6,7.68-.3,4.13-3.17,6.6-7.36,6.33A7.17,7.17,0,0,1,263.18,59.37Z" transform="translate(-13.1 -19.41)" />
        </g>
      </svg>
      <Button onClick={start}>Start</Button>
      <Button onClick={stop}>Stop</Button>
      <Typography component="h5">
        { gameOn ? playersTurn ? "Your Turn" : "Pan's Turn" : "Game Off"}
      </Typography>
      <h1>{ log }</h1>
    </div>
  );
}

export default PanFlute;
