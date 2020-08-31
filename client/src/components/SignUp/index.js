import React from "react";
import AvatarPic from "../AvatarPic";
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Card, CardActionArea, Button, TextField, Typography, CardContent, CardActions, CardMedia} from "@material-ui/core";
//import { useForm } from "react-hook-form";



const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
        height: 140,
      },
  });

// function handleSubmit(lalala){
//   console.log($("TextField").val());

// }
// let errors = 0;

// function register(){}

export default function MediaCard(props) {
  const classes = useStyles();

  const [nickname, setNickname] = useState();
  const [avatar, setAvatar] = useState();
  

  function handleAvatarChange(url)
  {
      setAvatar(url);
  }

  const textFieldChange = name => e => {
    setNickname(e.target.value);
  }

  function onSubmitButton() {
    console.log("submitted");
    if(!nickname) {
      alert("nickname required!");
    }
    else{
      //TODO: push to db and redirect
      alert("name=" + nickname + " and avatar=" + avatar + " and email=" + props.email);
    }
  }

  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media}>
              <AvatarPic onAvatarChange={handleAvatarChange}/>
            </CardMedia>
            <br></br>
            <CardContent>
              <Typography gutterBottom variant="h6" component="h6" justify-content="left">Hello: {props.email}</Typography>
              <h4 align-content="left">Nickname: 
                <TextField id="outlined-required-size-small" onChange={textFieldChange('x')} label="Required" variant="outlined" size="small"></TextField>
              </h4>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button variant="contained" color="primary" size="small" onClick={onSubmitButton}> Submit</Button>
          </CardActions>
        </Card>
      </Container>
    </React.Fragment>
  );
}
    // {props.accessToken ? <h5>Your Access Token: <br /><br /> {props.accessToken}</h5> : null}
    // {props.googleId ? 
    //     <h5>Your GoogleId: <br /><br /> {props.googleId} <br /><br />
    //     Your Avatar:<br /><br />
    //     </h5> : null}
        //</Container><AvatarPic onAvatarChange={handleAvatarChange}></AvatarPic>
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <label for="name">Nickname : </label>
    //   <input
    //     type="text"
    //     id="name"
    //     aria-invalid={errors.name ? "true" : "false"}
    //     ref={register({ required: true, maxLength: 30 })}
    //   />
      
    //   {errors.name && errors.name.type === "required" && (
    //     <span role="alert">This is required</span>
    //   )}
    //   {errors.name && errors.name.type === "maxLength" && (
    //     <span role="alert">Max length exceeded</span>
    //   )}
      
    //   <button className="btn btn-success mt-3 mb-5" type="submit">
    //       Submit
    //     </button>
    // </form> 
    