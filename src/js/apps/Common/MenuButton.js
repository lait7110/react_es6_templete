import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  menuButton: {
    // marginRight: theme.spacing(10)
  },
  list: {
    width: 250
  }
}));

const MenuButton = props => {
  const [isActive, setIsActive] = useState(false);
  const classes = useStyles();

  const toggleDrawer = e => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
      return;
    }
    setIsActive(!isActive);
  };

  const movePage = e => {
    const href = e.target.closest('.MuiButtonBase-root').getAttribute('href');
    props.history.push(href);
  }

  const getSideList = () => {
    return (
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text} href="" onClick={movePage}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail"].map((text, index) => (
            <ListItem button key={text} href="" onClick={movePage}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Trash", "Spam"].map((text, index) => (
            <ListItem button key={text} href="" onClick={movePage}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  };

  return (
    <div>
    <IconButton
      className={classes.menuButton}
      color="inherit"
      onClick={toggleDrawer}
    >
      <MenuIcon />
    </IconButton>
    <Drawer open={isActive} onClose={toggleDrawer}>
      {getSideList("left")}
    </Drawer>
  </div>
  );
}

export default withRouter(MenuButton);
