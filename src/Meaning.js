import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div>
      <h3> {props.meaning.partOfSpeech}</h3>;
      <p>
        <strong> Drefinition:</strong> {props.meaning.definition}
        <br />
        <strong> Example:</strong>
        <em> {props.meaning.example}</em>
        <br />
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}
