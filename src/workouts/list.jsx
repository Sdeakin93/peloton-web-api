import React from "react";
import { WorkoutType } from "./";
import { WorkoutsShape } from "../shapes/workouts";

export const WorkoutList = ({ workouts = [] }) => (
  <div>
    {workouts.map((workout) => (
      <WorkoutType {...workout} key={workout.slug} />
    ))}
  </div>
);

WorkoutList.propTypes = WorkoutsShape;
