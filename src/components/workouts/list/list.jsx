import React from "react";
import { ListFilters } from "./filters";
import { WorkoutType } from "../";
import { WorkoutsShape } from "../shapes";
import { useGetFilteredWorkouts } from "./use-get-filtered-workouts";

export const WorkoutList = () => {
  const filteredWorkouts = useGetFilteredWorkouts();

  const shouldRenderWorkouts = filteredWorkouts.length > 0;

  return (
    <div>
      <ListFilters />
      {shouldRenderWorkouts ? (
        filteredWorkouts.map((workout) => (
          <WorkoutType {...workout} key={workout.slug} />
        ))
      ) : (
        <h4>No Workouts Found</h4>
      )}
    </div>
  );
};

WorkoutList.propTypes = WorkoutsShape;
