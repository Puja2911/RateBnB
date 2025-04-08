import React from "react";
import features from "../featureCardInfo";

function featureCard(props) {
  return (
    <div>
      <i class={props.iconClass}></i>
      <h2>{props.Heading}</h2>
      <p>{props.Description}</p>
    </div>
  );
}

export default featureCard;
