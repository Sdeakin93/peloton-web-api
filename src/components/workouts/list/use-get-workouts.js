import { usePelotonData } from "../../../context";

const getWorkouts = (state) => state?.data?.workout_counts ?? [];

const useGetWorkouts = () => {
  const { state } = usePelotonData();
  return getWorkouts(state);
};

export { useGetWorkouts };
