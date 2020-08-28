import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const CLIENT_ID = "15003138507-rrf8me4d9tdffufbu8l38mji2h372j2m.apps.googleusercontent.com";

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
        googleId: response.googleId
      }));
      console.log(response.profileObj.email);
    }
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

  render() {
    return (
      <div>
        {
          this.state.isLogined
            ? (
            <GoogleLogout
              clientId={CLIENT_ID}
              buttonText="Logout"
              onLogoutSuccess={this.logout}
              onFailure={this.handleLogoutFailure}
            />
            )
            : (
            <GoogleLogin
              clientId={CLIENT_ID}
              buttonText="Login"
              onSuccess={this.login}
              onFailure={this.handleLoginFailure}
              cookiePolicy="single_host_origin"
              responseType="code,token"
            />
            )
        }
        {
          this.state.accessToken
            ? (
            <h5>
              Your Access Token:
              <br />
              <br />
              { this.state.accessToken }
            </h5>
            )
            : null 
        }
        { this.state.googleId 
            ? (
            <h5>
              Your GoogleId:
              <br />
              <br />
              { this.state.googleId }
            </h5>
          )
          : null }
      </div>
    );
  }
}
