import React from "react";

// Components

// Hooks
import { useFilters } from "./use-filters";
import { usePelotonData } from "../../../context";

export const ListFilters = () => {
  const {
    textFilter,
    setTextFilter,
    countFilter,
    toggleCountFilter,
    zeroFilter,
    toggleZeroFilter,
  } = useFilters();
  const { state } = usePelotonData();
  const { data } = state;

  const shouldRenderFilters = data.username;
  return (
    <div>
      {shouldRenderFilters ? (
        <>
          <div className="flex items-center">
            <input
              className="bg-gray-200 focus:bg-white text-gray-900  flex-1 text-center rounded-md px-4 py-2 m-2"
              type="text"
              placeholder="Filter workouts by name"
              value={textFilter}
              onChange={setTextFilter}
            />
          </div>
          <div className="submit">
            <button
              className="bg-gray-200 focus:bg-white text-gray-900 rounded-md px-4 py-2 m-2"
              onClick={toggleCountFilter}
            >
              Show highest performance workouts
            </button>
            {/* sets a boolean in state to true or false */}
          </div>
          <div className="submit">
            <button
              className="bg-gray-200 focus:bg-white text-gray-900 rounded-md px-4 py-2 m-2"
              onClick={toggleZeroFilter}
            >
              Remove workouts with no performance
            </button>
            {/* sets a boolean in state to true or false */}
          </div>
        </>
      ) : null}
    </div>
  );
};

ListFilters.propTypes = {};
