import React, {
  useEffect,
  useState
} from "react";
import {
  Grid,
  Paper,
  Button,
  Dialog as MyDialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@material-ui/core";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { Redirect } from "react-router-dom";
import "./style.css";
import { useStore } from "../../utils/globalState";
import API from "../../utils/API";
import hades0 from "../../assets/GreekGods/hades.png";
import aphrodite0 from "../../assets/GreekGods/aphrodite.png";
import ares0 from "../../assets/GreekGods/ares.png";
import zeus0 from "../../assets/GreekGods/zeus.png";
import hecate0 from "../../assets/GreekGods/hecate.png";
import hera0 from "../../assets/GreekGods/hera.png";
import demeter0 from "../../assets/GreekGods/demeter.png";
import poseidon0 from "../../assets/GreekGods/poseidon.png";
import hades1 from "../../assets/GreekGods/hades.svg";
import aphrodite1 from "../../assets/GreekGods/aphrodite.svg";
import ares1 from "../../assets/GreekGods/ares.svg";
import zeus1 from "../../assets/GreekGods/zeus.svg";
import hecate1 from "../../assets/GreekGods/hecate1.svg";
import hera1 from "../../assets/GreekGods/hera.svg";
import demeter1 from "../../assets/GreekGods/demeter.svg";
import poseidon1 from "../../assets/GreekGods/poseidon.svg";

const matchCards = [
  {
    key: "Hades0",
    image: hades0,
    type: "Hades",
  },
  {
    key: "Hades1",
    image: hades1,
    type: "Hades",
  },
  {
    key: "Aphrodite0",
    image: aphrodite0,
    type: "Aphrodite",
  },
  {
    key: "Aphrodite1",
    image: aphrodite1,
    type: "Aphrodite",
  },
  {
    key: "Ares0",
    image: ares0,
    type: "Ares",
  },
  {
    key: "Ares1",
    image: ares1,
    type: "Ares",
  },
  {
    key: "Zeus0",
    image: zeus0,
    type: "Zeus",
  },
  {
    key: "Zeus1",
    image: zeus1,
    type: "Zeus",
  },
  {
    key: "Hecate0",
    image: hecate0,
    type: "Hecate",
  },
  {
    key: "Hecate1",
    image: hecate1,
    type: "Hecate",
  },
  {
    key: "Hera0",
    image: hera0,
    type: "Hera",
  },
  {
    key: "Hera1",
    image: hera1,
    type: "Hera",
  },
  {
    key: "Demeter0",
    image: demeter0,
    type: "Demeter",
  },
  {
    key: "Demeter1",
    image: demeter1,
    type: "Demeter",
  },
  {
    key: "Poseidon0",
    image: poseidon0,
    type: "Poseidon",
  },
  {
    key: "Poseidon1",
    image: poseidon1,
    type: "Poseidon",
  }
];

function OlympusMatch() {
  const [cards, setCards] = useState([]);
  const [otherSelectedCard, setOtherSelectedCard] = useState(null);
  const [numMatches, setNumMatches] = useState(0);
  const [returnToOverworld, setReturnToOverworld] = useState(false);
  const [showGameOver, setShowGameOver] = useState(false);
  const [runningScore, setRunningScore] = useState(6400);
  const [state, dispatch] = useStore();

  useEffect(() => {
    setCards(matchCards.sort(() => 0.5 - Math.random()));
  }, []);

  function onCardClicked(e) {
    e.stopPropagation();
    e.currentTarget.classList.add("cardClicked");

    if (otherSelectedCard) {
      if (e.currentTarget.dataset.type === otherSelectedCard.dataset.type) {
        if (numMatches >= 7) {
          setTimeout(() => {
            setShowGameOver(true);
          }, 1000);
        }
        setNumMatches(numMatches + 1);
        const currentSelectedCard = e.currentTarget;
        setTimeout(() => {
          currentSelectedCard.classList.add("cardMatched");
          otherSelectedCard.classList.add("cardMatched");
          setOtherSelectedCard(null);
        }, 1000);
      } else {
        const currentSelectedCard = e.currentTarget;
        setTimeout(() => {
          currentSelectedCard.classList.remove("cardClicked");
          otherSelectedCard.classList.remove("cardClicked");
          setOtherSelectedCard(null);
          setRunningScore(runningScore - 200);
        }, 1000);
      }
    } else {
      setOtherSelectedCard(e.currentTarget);
    }
  }

  function save() {
    // update store
    const { user } = state;
    user.score += runningScore;
    console.log("finished with score", runningScore);
    dispatch({ type: "SetUser", user });
    // save user to db
    API.saveUser(user.display_name, user).then((dbUser) => {
      console.log(dbUser);
      setReturnToOverworld(true);
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <h1>Olympus Match</h1>
      <Grid container direction="row" justify="center" alignItems="center">
        {
          cards.map((card) => (
            <Grid key={card.key} item xs={3} container justify="center" alignItems="center">
              <div className="cardContainer">
                <Paper className="card" onClick={onCardClicked} data-type={card.type}>
                  <Paper className="cardFront" />
                  <Paper className="cardBack">
                    <img className="cardBackImg" src={card.image} alt={card.type} />
                  </Paper>
                </Paper>
              </div>
            </Grid>
          ))
        }
      </Grid>
      <Grid item xs={12} container justify="center" alignItems="center">
        {runningScore}
        &nbsp;
        <FlashOnIcon />
      </Grid>
      <Grid>
        <MyDialog open={showGameOver}>
          <DialogTitle>Level Complete!</DialogTitle>
          <DialogContent>
            You&apos;ve won&nbsp;
            {runningScore}
            <FlashOnIcon />
          </DialogContent>
          <DialogActions>
            <Button onClick={save}>
              Ok
            </Button>
          </DialogActions>
        </MyDialog>
      </Grid>
      {returnToOverworld ? <Redirect to="/overworld" /> : null}
    </Grid>
  );
}

export default OlympusMatch;
