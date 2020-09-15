/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from "react";
import BackgroundImage from "../../assets/athens3.jpg";

const styles = {
  container: {
    textAlign: "left",
    padding: "2em"
  },
  superContainer: {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "calc(100vh - 64px)"
  }
};

function Credits() {
  return (
    <div style={styles.superContainer}>
      <div style={styles.container}>
        <h1>Credits</h1>
        <h3>Many of our graphics were designed by our amazing team. But for those weren't, the artists are credited below</h3>
        <br />
        <p>
          Hades Icon:
          {" "}
          <a href="https://www.freepik.com/vectors/education">Education vector created by macrovector - www.freepik.com</a>
        </p>
        <p>Adobe Stock licensed images</p>
      </div>
    </div>
  );
}

export default Credits;
