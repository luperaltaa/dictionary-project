import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic} target="_blank" rel="noreferrer">
        {" "}
        Listen
      </a>
      <br />
      {props.phonetic}
    </div>
  );
}
