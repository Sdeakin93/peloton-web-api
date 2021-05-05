import { usePelotonData } from "../../../context";

// Zero Filter: (toggle hiding workouts with 0 count)
// Text Filter: "yog" ==> Yoga ✅
// Sort
//// Alphabetical
//// Most Performed
/////////////////////////////////////////////////////

// Action Dispatchers
const setTextFilter = (e) => ({
  type: "setTextFilter",
  filter: e?.target?.value.toLowerCase() ?? "",
});

const setCountFilter = (BOOL) => ({
  type: "setCountFilter",
  filter: BOOL,
});

// Selectors
const getTextFilter = (state) => state?.filters?.text ?? "";
const getCountFilter = (state) => state?.filters?.bool;

// const { textFilter, setTextFilter } = useFilters();
// const { countFilter, setCountFilter } = useFilters();
export const useFilters = () => {
  const { state, dispatch } = usePelotonData();

  return {
    textFilter: getTextFilter(state),
    setTextFilter: (e) => dispatch(setTextFilter(e)),
    countFilter: getCountFilter(state),
    setCountFilter: (BOOL) => dispatch(setCountFilter(BOOL)),
    // setCountFilter: (BOOL) => dispatch(setCountFilter(BOOL)),
  };
};
