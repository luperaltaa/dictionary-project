import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }
  function handleResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let key = "736o017e61b1fe0a90f0dtec35534030";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let apiKey = "736o017e61b1fe0a90f0dtec35534030";
    let scUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios.get(scUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up, Mercedes?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">Suggested words: animals, planet...</div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
