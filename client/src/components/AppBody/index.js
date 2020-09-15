import React from "react";

const styles = {
  appBody: {
    marginTop: "64px"
  }
};

function AppBody(props) {
  return (
    <div style={styles.appBody}>
      {props.children}
    </div>
  );
}

export default AppBody;
