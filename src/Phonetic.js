import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  // This API doesn't contain the audio but I left the icon.
  return (
    <div className="Phonetic">
      <i className="fa-solid fa-volume-high"></i>
      <span>{props.phonetic}</span>
    </div>
  );
}
