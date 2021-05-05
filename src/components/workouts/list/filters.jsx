import React from "react";

// Components

// Hooks
import { useFilters } from "./use-filters";
import { usePelotonData } from "../../../context";

export const ListFilters = () => {
  const { textFilter, setTextFilter } = useFilters();
  const { countFilter, setCountFilter } = useFilters();
  const { state } = usePelotonData();
  const { data } = state;

  const shouldRenderFilters = data.username;
  return (
    <div>
      {shouldRenderFilters ? (
        <>
          <input
            type="text"
            placeholder="Filter workouts by name"
            value={textFilter}
            onChange={setTextFilter}
          />
          <div className="submit">
            {/* <button type="submit" onChange={setCountFilter} value={countFilter}>
              Sort workouts by most performed
            </button> */}
            {/* <button type="toggle">Remove workouts with no counts</button> */}
          </div>
        </>
      ) : null}
    </div>
  );
};

ListFilters.propTypes = {};
