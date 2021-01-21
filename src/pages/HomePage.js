import React from "react";
import { withRouter } from "react-router-dom";

const HomePage = (props) => {
    console.dir(props);
 
  return <h2>Home</h2>;
};

export default withRouter(HomePage);
