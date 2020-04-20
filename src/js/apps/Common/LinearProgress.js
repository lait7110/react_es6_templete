import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useSelector } from "react-redux";

const LinearProgressBar = props => {
  const isLoading = useSelector(state => state.Common.isLoading);
  return (
    <div>
      {isLoading? <LinearProgress />: <div></div>}
    </div>
  );
}

export default LinearProgressBar;