import React from "react";
import features from "../featureCardInfo";
import featureCard from "./featureCard";

function mapFeatures(props) {
  return (
    <featureCard
      iconClass={props.iconClass}
      Heading={props.Heading}
      Description={props.Description}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{features.map(mapFeatures)}</dl>
    </div>
  );
}

export default App;
