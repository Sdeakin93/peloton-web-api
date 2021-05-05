import { useGetWorkouts } from "./use-get-workouts";
import { useFilters } from "./use-filters";

// const filteredWorkouts = useGetFilteredWorkouts();
export const useGetFilteredWorkouts = () => {
  let workouts = useGetWorkouts();
  const { textFilter } = useFilters();

  // Text Filter
  workouts = workouts.filter((w) => w.name.toLowerCase().includes(textFilter));

  // // @TODO Count Filter
  // workouts = workouts.filter((w) => w.count.sort());

  // @TODO Other Filters

  return workouts;
};
