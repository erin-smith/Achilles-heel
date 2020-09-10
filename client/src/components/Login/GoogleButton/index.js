import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import SignUp from "../../SignUp";

const CLIENT_ID = "15003138507-rrf8me4d9tdffufbu8l38mji2h372j2m.apps.googleusercontent.com";

const avatarAPI = "https://avatars.dicebear.com/api/bottts/example.svg?options[colors][]=";
const colorsArr = [
  "amber", "blue", "blueGrey", "brown", "cyan", "deepOrange", "deepPurple", "green", "grey", "indigo",
  "lightBlue", "lightGreen", "lime", "orange", "pink", "purple", "red", "teal", "yellow"
];

const randomColor = colorsArr[Math.floor(Math.random() * colorsArr.length)];
// console.log(randomColor);

const randomAvatar = avatarAPI + randomColor;

export default class GoogleBtn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: "",
      googleId: ""
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login(response) {
    if (response.accessToken) {
      this.setState(() => ({
        isLogined: true,
        accessToken: response.accessToken,
        googleId: response.googleId,
        email: response.profileObj.email
      }));
      return (response.profileObj.email);
    }
    return null;
  }

  logout() {
    this.setState(() => ({
      isLogined: false,
      accessToken: ""
    }));
  }

  handleLoginFailure() {
    console.log("Failed to log in");
  }

  handleLogoutFailure() {
    console.log("Failed to log out");
  }

  /* eslint-disable */
  render() {
    return (
      <div>
        {this.state.isLogined ?
          <GoogleLogout
            clientId={CLIENT_ID}
            buttonText='Logout'
            onLogoutSuccess={this.logout}
            onFailure={this.handleLogoutFailure}
          >
          </GoogleLogout> : <GoogleLogin
            clientId={CLIENT_ID}
            buttonText='Login'
            onSuccess={this.login}
            onFailure={this.handleLoginFailure}
            cookiePolicy={'single_host_origin'}
            responseType='code,token'
          />
        }
        {this.state.googleId ? <SignUp googleId={this.state.googleId} accessToken={this.state.accessToken} avatar={randomAvatar} email={this.state.email}>
        {/*{this.state.accessToken ? <h5>Your Access Token: <br /><br /> {this.state.accessToken}</h5> : null}
        {this.state.googleId ? <h5>Your GoogleId: <br /><br /> {this.state.googleId} <br /><br />
        Your Avatar:<br /><br />
      <img style={{ width: 150, height: 150 }} src={randomAvatar} alt="avatarPic"></img></h5> : null}*/}
        </SignUp> : null}
      </div>
    )
  }
}
