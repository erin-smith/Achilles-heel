import React from 'react';

const styles = {
  container: {
    textAlign: "left"
  }
}

function Credits() {
    return (
        <div style={styles.container}>
        <h1>Credits</h1>
        <p>Medusa Icon <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons">Flat Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>
        <p>Hades Icon <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>
        </div>
    )
}

export default Credits;

// this file is in case we use images, icons, information in our MVP that needs to be credited