/*
// Open Question: how do we structure this?
{
  data: defaultData,
  filters: {
    text: '',
    count: false,
  },
  sort: 'ALPHA|COUNT|DURATION',
};

{
  data: defaultData,
  filters: {
    text: '',
    count: false,
    sort: 'ALPHA|COUNT|DURATION',
  }
};
*/

export const initialState = {
  data: {},
  filters: {},
};

export function reducer(state, action) {
  switch (action.type) {
    case "storeData":
      return { ...state, data: action.data || {} };
    // case "falseData":
    //   return { ...state, data: action.data || {} };
    case "clearData":
      return { ...state, data: {} };
    case "setTextFilter":
      return { ...state, filters: { text: action.filter || "" } };
    case "setCountFilter":
      return {
        ...state,
        filters: { ...state.filters, count: action.filter },
      };
    case "setZeroFilter":
      return {
        ...state,
        filters: { ...state.filters, count: action.filter },
      };
    default:
      return state;
  }
}
