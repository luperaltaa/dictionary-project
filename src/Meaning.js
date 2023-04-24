import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div>
      <h3> {props.meaning.partOfSpeech}</h3>;
      <p>
        {props.meaning.definition}
        <br />
        {props.meaning.example}
      </p>
    </div>
  );
}
