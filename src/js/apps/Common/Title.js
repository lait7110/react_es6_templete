import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    cursor: 'pointer',
  },
}));


const Title = props => {
  const classes = useStyles();

  const redirectTop = e => {
    props.history.push("/");
  }
  return (
    <Typography variant="h6" className={classes.title} onClick={redirectTop}>
    REACT ES6 TEMPLETE
  </Typography>
  );
}

export default withRouter(Title);
