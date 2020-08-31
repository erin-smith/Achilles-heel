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

const randomColorId = Math.floor(Math.random() * colorsArr.length);

export default class AvatarPic extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      randomAvatar: "",
      choiceColor: randomColorId
    };
  }

  getAvatar(colorId){
    return avatarAPI + colorsArr[colorId];
  }

  handleDecrement = () => {
    this.setState(prevState => (
      {choiceColor: (prevState.choiceColor-1) < 0 ? colorsArr.length-1 : prevState.choiceColor-1})
    )
  }
  handleIncrement = () => {
    this.setState(prevState => (
      {choiceColor: (prevState.choiceColor+1) >= colorsArr.length ? 0 : prevState.choiceColor+1})
    )
  }

  render() {
    this.props.onAvatarChange(this.getAvatar(this.state.choiceColor));
    return (
      <div className="row mt-3">
        <div className="card-header">
          <button justify-content="left" onClick={this.handleDecrement}>Prev</button>
          <img className="card-img-top" src={this.getAvatar(this.state.choiceColor)} style={{ width: 150, height: 150 }} alt="avatarPic" />
          <button onClick={this.handleIncrement}>Next</button>
          {/* <div className="card-title">{this.state.choiceColor}:{colorsArr[this.state.choiceColor]} </div> */}
          <br></br>
          <br></br>
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
