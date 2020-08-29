import React from "react";
// import { Avatar } from 'react-native-elements';
// import Avatar from 'react-avatar-edit';
// import Avatars from '@dicebear/avatars';
// import sprites from '@dicebear/avatars-bottts-sprites';

// let avatars = new Avatars(sprites());
// let svg = avatars.create('custom-seed');

// /'example'.svg will be substituted with the input the user uses for the username
const avatarAPI = "https://avatars.dicebear.com/api/bottts/example.svg?options[colors][]=";
const colorsArr = [
  "amber", "blue", "blueGrey", "brown", "cyan", "deepOrange", "deepPurple", "green", "grey", "indigo",
  "lightBlue", "lightGreen", "lime", "orange", "pink", "purple", "red", "teal", "yellow"
];

const randomColor = colorsArr[Math.floor(Math.random() * colorsArr.length)];
//console.log(randomColor);

const randomAvatar = avatarAPI + randomColor;

export default class AvatarPic extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      randomAvatar: ""
    };
  }

  render() {
    return (
      <div className="row mt-5">
        <div key={randomAvatar} className="card mx-auto col-4">
          <img className="card-img-top" src={randomAvatar} style={{ width: 150, height: 150 }} alt="avatarPic" />
          <div className="card-body">
            <h4 className="card-title">{this.state.username}User Name Here</h4>
            <p className="card-text">Extra details about user we want to display here</p>
          </div>
        </div>
      </div>
    );
  }

  // constructor(props) {
  //   super(props)
  //   const src = 'https://avatars.dicebear.com/api/bottts/example.svg?options[colors][]=cyan'
  //   this.state = {
  //     preview: null,
  //     src
  //   }
  //   this.onCrop = this.onCrop.bind(this)
  //   this.onClose = this.onClose.bind(this)
  // }

  // onClose() {
  //   this.setState({ preview: null })
  // }

  // onCrop(preview) {
  //   this.setState({ preview })
  // }

  // render() {
  //   return (
  //     <div>
  //       <Avatar
  //         width={350}
  //         height={350}
  //         onCrop={this.onCrop}
  //         onClose={this.onClose}
  //         src={this.state.src}
  //         rounded
  //       />
  //       <img className="justify-center-align" src={this.state.preview} alt="avatarPreview" />
  //     </div>
  //   )
  // }
}
