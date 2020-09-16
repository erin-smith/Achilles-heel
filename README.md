# Achilles' Heel: Battling Through Ancient Greece
![GitHub License](https://img.shields.io/github/commit-activity/m/erin-smith/Achilles-heel) ![GitHub License](https://img.shields.io/npm/l/express) ![GitHub License](https://img.shields.io/github/repo-size/erin-smith/Achilles-heel) ![GitHub License](https://img.shields.io/github/issues-raw/erin-smith/Achilles-heel) ![GitHub License](https://img.shields.io/github/issues-closed-raw/erin-smith/Achilles-heel) ![GitHub License](https://img.shields.io/github/package-json/dependency-version/erin-smith/Achilles-heel/mongodb) ![GitHub License](https://img.shields.io/github/package-json/dependency-version/erin-smith/Achilles-heel/mongoose) ![GitHub License](https://img.shields.io/github/package-json/dependency-version/erin-smith/Achilles-heel/axios) ![GitHub License](https://img.shields.io/github/package-json/dependency-version/erin-smith/Achilles-heel/concurrently) ![GitHub License](https://img.shields.io/github/package-json/dependency-version/erin-smith/Achilles-heel/eslint-config-airbnb) ![GitHub License](https://img.shields.io/github/package-json/dependency-version/erin-smith/Achilles-heel/express) ![GitHub License](https://img.shields.io/github/followers/alexastef?style=social) ![GitHub License](https://img.shields.io/github/followers/reptile18?style=social) ![GitHub License](https://img.shields.io/github/followers/mmoncayo?style=social) ![GitHub License](https://img.shields.io/github/followers/erin-smith?style=social) [![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)


## Description

Achilles' Heel is a full-stack web application that is a fun and engaging game designed for all ages to give the user an educational opportunity to learn a bit about Ancient Greek mythology in an interactive way. This web application follows the MERN stack framework as this best suites our apps needs for having dynamic web interfaces with primarily cloud-native and JSON heavy cases. ESLint was used for code validation and consistency and the Airbnb configuration style guidelines were applied while linting. 


The app is currently deployed on Heroku so you can check out [Achilles' Heel](https://achilles-heel.herokuapp.com/) now!


## Table of Contents 

* [Demo](#demo)

* [Prerequisites](#prerequisites)

* [Installation](#installation)

* [Usage](#usage)

* [Game Descriptions](#game-descriptions)

* [License](#license)

* [Collaborators](#collaborators)

* [Contributing](#contributing)

* [Credits](#credits)
​
* [Questions](#questions)

## Demo

Achilles' Heel live on [Heroku!](https://achilles-heel.herokuapp.com/)

### New User Sign-Up Process
![Sign-Up Process](./client/src/assets/SignUp.gif)

### Pan's Flute Lesson
![Pan's Flute](./client/src/assets/PansFlute.gif)

### Mount Olympus Match
![Mt. Olympus](./client/src/assets/MtOlympus.gif)

### Hades' Gate Trivia 
![Hades' Gate](./client/src/assets/HadesGate.gif)


## Prerequisites

Should you want to create your own replica of the application, you'll need to have the following technologies and resources installed:

* [MongoDB & Mongoose](https://www.mongodb.com/)
* [Express.js](https://expressjs.com/)
* [React.js](https://reactjs.org/)
* [Node.js](https://nodejs.dev/)
* [Heroku](https://dashboard.heroku.com/)
* [Google Sign-In API](https://developers.google.com/identity/sign-in/web/sign-in)
* [Avatar API](https://avatars.dicebear.com/)

## Installation

To review the repository of the project, you can clone the repo remotely on your local machine with the following command line in your terminal

```
git clone https://github.com/erin-smith/Achilles-heel.git
```

If you'd like to install the app locally, you can navigate to the 'Achilles-heel' directory and first install the necessary and relevant dependencies using Node.js by running the following command from the root directory:

```
npm install
```

You can then run the following command below, and React will automatically re-direct you to your browser and open the web browser on ```localhost:3000```

```
npm start
```

## Usage

Whether you've accessed the app locally on your browser or if you went directly from the Heroku link, you'll be directed to sign up first before you enter the game. You'll need to have a Google account to authorize the login process to sign up and then you'll be directed to both select your preferred Avatar icon and enter a user name to be displayed throughout the time the user is playing the game.

You are then given the option to select one of the games on the 'Overworld' page to play and attempt to beat the level. Your ultimate objective is to successfully complete all of the games to achieve the highest score possible-- and learn some valuable knowledge along the way! You can keep track of everyone's high scores on the leaderboard page. 

## Game Descriptions 

### Pan's Flute
  * Play a game of Simon and test your memory to see if you can beat Pan's Flute. 
    * The flute will create a series of tones and lights and requires the user to repeat the sequence before time runs      out. If the user succeeds, the sequence progressively becomes more challenging and complex. Once the user fails or    time runs out, the game is over.


### Mount Olympus Match
  * Test your knowledge on Ancient Greek Gods & Goddesses and see if you can match them with their respective symbols
    * You're presented with a grid of unknown cards (faced down) and you are given the option to turn over two cards. If    the two turned over cards are the right match between God/Goddess and their respective symbol, they'll disappear      from the board. Your ultimate goal is to get all the respective matches on the board.


### Hades' Gate
  * Find out how much you know about the Underworld beyond Hades' Gate. See how many questions you can answer correctly.
    * In a game of trivia, the user must answer correctly as many questions related to the Underworld in order to gain      the most points. Answer three questions incorrectly and you'll have failed too many times, thus booting you out of    the game.


## License

This project is licensed under the MIT license.

## Collaborators

### ![Johnny Li](https://avatars.githubusercontent.com/reptile18?size=200)
* ### [Johnny Li](https://github.com/reptile18)
### ![Matt Moncayo](https://avatars.githubusercontent.com/mmoncayo?size=200)
* ### [Matt Moncayo](https://github.com/mmoncayo)
### ![Erin Smith](https://avatars.githubusercontent.com/erin-smith?size=200)
* ### [Erin Smith](https://github.com/erin-smith)
### ![Alexa Stefankiewicz](https://avatars.githubusercontent.com/alexastef?size=200)
* ### [Alexa Stefankiewicz](https://github.com/alexastef)

## Contributing

If you'd like to contribute to the repo, there is interest in future development in major areas for expanding the game into different 'worlds' and levels, creating a full profile page for the user, connectivity across social media platforms, receiving push notifications when another user beats your high score, etc.

If interested in contributing, please reach out to any of the collaborators via GitHub to discuss your input.

## Credits

Many of the graphics used for styling in the application were designed by our team, and those that weren't are credited for in the About page under the 'Credits' link. 

## Questions

Questions or feedback-- we welcome them all! Feel free to reach out for any questions about the repo, open an issue or contact any of the collaborators above and we'll get back to you as soon as possible.

