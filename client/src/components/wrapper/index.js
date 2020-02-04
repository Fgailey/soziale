import React from "react";

function Wrapper (props) {
  return <div className="wrapper container-fluid">{props.children}</div>;
}

export default Wrapper;