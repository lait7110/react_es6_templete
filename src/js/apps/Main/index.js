import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Title from "../Common/Title";
import MenuButton from "../Common/MenuButton";

const Main = props => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="regular">
          <MenuButton />
          <Title />
        </Toolbar>
      </AppBar>
      <h1>Main</h1>
      {/* <Content /> */}
    </div>
  );
};

export default Main;
