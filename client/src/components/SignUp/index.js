import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Card, CardActionArea,
  Button,
  TextField,
  Typography,
  CardContent,
  CardActions,
  CardMedia
} from "@material-ui/core";
import { Redirect } from "react-router-dom";
import AvatarPic from "../AvatarPic";
import { useStore } from "../../utils/globalState";
import API from "../../utils/API";
// import { useForm } from "react-hook-form";

const useStyles = makeStyles({

  root: {
    maxWidth: 345,
    justifyContent: "center",
  },
  media: {
    height: 140,
    justifyContent: "center",
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  const [nickname, setNickname] = useState();
  const [avatar, setAvatar] = useState();
  const [goToOverworld, setGoToOverworld] = useState(false);
  const [, dispatch] = useStore();

  useEffect(() => {
    API.getUserByEmail(props.email).then((dbUser) => {
      if (dbUser.data.length > 0) {
        dispatch({ type: "SetUser", user: dbUser.data[0] });
        setGoToOverworld(true);
      }
    });
  }, [props.email, dispatch]);

  function handleAvatarChange(url) {
    setAvatar(url);
  }

  const textFieldChange = () => (e) => {
    setNickname(e.target.value);
  };

  function onSubmitButton() {
    console.log("submitted");
    // if (!nickname) {
    //   alert("nickname required!");
    // }

    // TODO: push to db and redirect
    const user = {
      email: props.email,
      display_name: nickname,
      avatar,
    };

    API.createUser(user).then((dbUser) => {
      console.log("user data saved", dbUser.data);
      dispatch({ type: "SetUser", user: dbUser.data });
      setGoToOverworld(true);
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <>
      <Container maxWidth="sm" justifyContent="center">
        <Card className={classes.root} justifyContent="center">
          <CardActionArea>
            <CardMedia className={classes.media}>
              <AvatarPic onAvatarChange={handleAvatarChange} />
            </CardMedia>
            <br />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h6" justify-content="left">
                Hello:
                {props.email}
              </Typography>
              <h4 align-content="left">
                Nickname:
                <TextField id="outlined-required-size-small" onChange={textFieldChange("x")} label="Required" variant="outlined" size="small" />
              </h4>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button variant="contained" color="primary" size="small" onClick={onSubmitButton()}> Submit</Button>
          </CardActions>
        </Card>
        {goToOverworld ? <Redirect to="/overworld" /> : null}

      </Container>
    </>
  );
}
