import React from "react";
import axios from "axios";
// import PropTypes from 'prop-types';

// Components

// Shapes

// Hooks
import { usePelotonData } from "../context";
import { useInput } from "./use-input";

// Utilities

export const Search = () => {
  const [username, handleEvent] = useInput("");
  const { dispatch } = usePelotonData();

  const fetchData = async () => {
    const result = await axios(
      `https://rocky-refuge-28597.herokuapp.com/https://api.onepeloton.com/api/user/${username}`
    );
    dispatch({ type: "storeData", data: result.data });
    console.log(result);
  };

  // Note the need to add a section in if a 404 is returned
  // dispatch({ type: "falseData" });

  function clearAll() {
    dispatch({ type: "clearData" });
  }

  return (
    <>
      <input
        className="username-form"
        type="text"
        placeholder="enter username"
        value={username}
        onChange={handleEvent}
      />
      <div className="buttons">
        <button disabled={!username} type="submit" onClick={() => fetchData()}>
          Submit
        </button>
        <button type="submit" onClick={() => clearAll()}>
          Clear
        </button>
      </div>
    </>
  );
};

Search.propTypes = {};
