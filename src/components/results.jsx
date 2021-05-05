import React from "react";
// import PropTypes from 'prop-types';

// Shapes

// Hooks
import { usePelotonData } from "../context";

// Utilities

export const Results = () => {
  const { state } = usePelotonData();
  const { data } = state;

  const shouldRenderResults = data.username;

  return (
    <div className="results">
      {shouldRenderResults ? (
        <>
          <h1>{data?.username}</h1>
          <p>Total workouts: {data?.total_workouts}</p>
          <p>Total followers: {data?.total_followers}</p>
          <p>Total following: {data?.total_following}</p>
        </>
      ) : null}
    </div>
  );
};

Results.propTypes = {};
