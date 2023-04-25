import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic} target="_blank" rel="noreferrer">
        {" "}
        <i class="fa-solid fa-volume-high"></i>
        <br />
        {props.phonetic}
      </a>
    </div>
  );
}
