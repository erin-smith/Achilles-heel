import React from "react";
import AvatarPic from "../AvatarPic";
import GoogleButton from "../../components/Login/GoogleButton"
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

function handleAvatarChange(url)
{
    console.log("new avatar url: " + url);
}

function handleSubmit(lalala){

}
// let errors = 0;

// function register(){}

export default function MediaCard(props) {
  const onSubmit = (data) => console.log(data);
  const classes = useStyles();

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
         <Typography gutterBottom variant="h6" component="h6" justify-content="left">Hello:</Typography>
         <h4 align-content="left">Nickname: 
        <TextField id="outlined-required-size-small" label="Required" variant="outlined" size="small"></TextField>
        </h4>
        </CardContent>
        </CardActionArea>
        <CardActions>
        <Button onSubmit={handleSubmit(onSubmit)} variant="contained" color="primary" size="small" > Submit</Button>
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
    
