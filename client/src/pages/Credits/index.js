/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from "react";

const styles = {
  container: {
    textAlign: "left"
  }
};

function Credits() {
  return (
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
  );
}

export default Credits;
