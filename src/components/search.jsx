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
  };

  // Note the need to add a section in if a 404 is returned
  // dispatch({ type: "falseData" });

  function clearAll() {
    dispatch({ type: "clearData" });
  }

  return (
    <>
      <div class="flex items-center">
        <input
          class="bg-gray-200 focus:bg-white text-gray-900  flex-1 text-center rounded-md px-4 py-2 m-2"
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={handleEvent}
        />
      </div>
      <div class="flex items-center">
        <button
          class="flex-1 bg-red-500 hover:bg-red-700 rounded-md px-4 py-2 m-2"
          disabled={!username}
          type="submit"
          onClick={() => fetchData()}
        >
          Submit
        </button>
        <button
          class="flex-1 bg-red-500 hover:bg-red-700 rounded-md px-4 py-2 m-2"
          type="submit"
          onClick={() => clearAll()}
        >
          Clear
        </button>
      </div>
    </>
  );
};

Search.propTypes = {};
