import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import {useStore} from "../../utils/globalState";


function Header() {
  //console.log(useStore);
  // demo();
  
  const [state, dispatch] = useStore();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Achilles Heel
        </Typography>
        <Typography>
          {dispatch({ type: "getUser" }).display_name}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
