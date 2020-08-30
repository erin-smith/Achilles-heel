import React from "react";
import AvatarPic from "../AvatarPic";
//import { useForm } from "react-hook-form";

function handleAvatarChange(url)
{
    console.log("new avatar url: " + url);
}

function handleSubmit(lalala){

}
let errors = 0;

function register(){}

export default function App(props) {
    
  //const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
    {props.accessToken ? <h5>Your Access Token: <br /><br /> {props.accessToken}</h5> : null}
    {props.googleId ? 
        <h5>Your GoogleId: <br /><br /> {props.googleId} <br /><br />
        Your Avatar:<br /><br />
        </h5> : null}
        <AvatarPic onAvatarChange={handleAvatarChange}></AvatarPic>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label for="name">Nickname : </label>
      <input
        type="text"
        id="name"
        aria-invalid={errors.name ? "true" : "false"}
        ref={register({ required: true, maxLength: 30 })}
      />
      
      {errors.name && errors.name.type === "required" && (
        <span role="alert">This is required</span>
      )}
      {errors.name && errors.name.type === "maxLength" && (
        <span role="alert">Max length exceeded</span>
      )}
      
      <button className="btn btn-success mt-3 mb-5" type="submit">
          Submit
        </button>
    </form> 
    </>
      );
}
