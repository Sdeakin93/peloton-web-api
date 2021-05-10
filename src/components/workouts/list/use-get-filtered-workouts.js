import { useGetWorkouts } from "./use-get-workouts";
import { useFilters } from "./use-filters";
import _ from "lodash";

// const filteredWorkouts = useGetFilteredWorkouts();
export const useGetFilteredWorkouts = () => {
  let workouts = useGetWorkouts();
  const { textFilter, countFilter, zeroFilter } = useFilters();

  // Text Filter
  workouts = workouts.filter((w) => w.name.toLowerCase().includes(textFilter));

  // // @TODO Count Filter
  // workouts = workouts.filter((w) => w.count.sort());

  if (countFilter) {
    workouts.sort((a, b) => b.count - a.count);
  }

  if (zeroFilter) {
    workouts = _.remove(workouts, function (w) {
      return w.count > 1;
    });
  }
  // @TODO Other Filters

  return workouts;
};
