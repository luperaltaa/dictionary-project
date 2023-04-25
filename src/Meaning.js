import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div>
      <h3> {props.meaning.partOfSpeech}</h3>;
      <div className="definition">{props.meaning.definition}</div>
      <br />
      <div className="example">
        <em> {props.meaning.example}</em>
      </div>
      <br />
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
