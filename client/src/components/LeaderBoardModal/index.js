import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Box
} from "@material-ui/core";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import API from "../../utils/API";
import trophy0 from "../../assets/leaderboard/trophy1.svg";
import trophy1 from "../../assets/leaderboard/trophy2.svg";
import trophy2 from "../../assets/leaderboard/trophy3.svg";

const styles = {
  dialog: {
    width: "100%"
  },
  listItem: {
    width: "100%"
  },
  placeIcon: {
    width: "40px",
    height: "40px"
  }
};

function icon(index) {
  switch (index) {
    case 0:
      return <img style={styles.placeIcon} src={trophy0} alt="gold trophy" />;
    case 1:
      return <img style={styles.placeIcon} src={trophy1} alt="silver trophy" />;
    case 2:
      return <img style={styles.placeIcon} src={trophy2} alt="bronze trophy" />;
    default:
      return <FlashOnIcon />;
  }
}

function LeaderBoardModal(props) {
  const [sortedUsers, setSortedUsers] = useState([]);
  useEffect(() => {
    API.getUsers().then((dbUsers) => {
      setSortedUsers(dbUsers.data.sort((a, b) => b.score - a.score));
    });
  }, [props.open]);
  return (
    <Dialog fullWidth open={props.open} style={styles.dialog}>
      <DialogTitle>Leaderboard</DialogTitle>
      <DialogContent>
        <List>
          {
            sortedUsers.map((user, index) => (
              <ListItem key={user.display_name} style={styles.listItem}>
                <ListItemAvatar>
                  <Avatar alt={user.display_name} src={user.avatar} />
                </ListItemAvatar>
                <ListItemText>
                  <Box display="flex" direction="row" justifyContent="flex-start" alignItems="center">
                    <Box flexGrow={1}>
                      {user.display_name}
                    </Box>
                    <Box>
                      {user.score}
                      &nbsp;
                    </Box>
                    <Box flexShrink={1}>
                      {icon(index)}
                    </Box>
                  </Box>
                </ListItemText>
              </ListItem>
            ))
          }
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.close}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}

export default LeaderBoardModal;
