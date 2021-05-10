import { usePelotonData } from "../../../context";

// Zero Filter: (toggle hiding workouts with 0 count)
// Text Filter: "yog" ==> Yoga ✅
// Sort
//// Alphabetical - toggle, two different modes between these two
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

const setZeroFilter = (BOOL) => ({
  type: "setZeroFilter",
  filter: BOOL,
});

// Selectors
const getTextFilter = (state) => state?.filters?.text ?? "";
const getCountFilter = (state) => state?.filters?.count;
const getZeroFilter = (state) => state?.filters?.count;

// const { textFilter, setTextFilter } = useFilters();
// const { countFilter, setCountFilter } = useFilters();
export const useFilters = () => {
  const { state, dispatch } = usePelotonData();
  const countFilter = getCountFilter(state);
  const textFilter = getTextFilter(state);
  const zeroFilter = getZeroFilter(state);

  return {
    textFilter,
    setTextFilter: (e) => dispatch(setTextFilter(e)),
    countFilter,
    toggleCountFilter: () => dispatch(setCountFilter(!countFilter)),
    zeroFilter,
    toggleZeroFilter: () => dispatch(setZeroFilter(!zeroFilter)),
  };
};
