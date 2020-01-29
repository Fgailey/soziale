import React from "react";
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";

const Message = (props) => {
  return (
    <div>
        <p>{props.incomingMessage}</p>
    </div>
  );
}

export default Message;