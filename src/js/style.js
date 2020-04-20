import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  contentRoot: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: theme.spacing(2),
    "& > *": {
      // margin: theme.spacing(1),
      width: theme.spacing(200),
      height: theme.spacing(60)
    }
  },
  contentTheme: {
    margin: theme.spacing(3)
  },
  paper: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(1)
  },
  midResult: {
    color: "#aaa"
  },
  result: {},
  inputButton: {
    opacity: 0,
    appearance: "none",
    position: "absolute",
  }
}));

export default useStyles;