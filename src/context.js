import React, { useContext, useReducer } from "react";
import { reducer as pelotonReducer, initialState } from "./reducer";

const PelotonDataContext = React.createContext();
PelotonDataContext.displayName = "PelotonData";

// usage: const {state, dispatch} = usePelotonData();
// context works as provider and consumer

export const usePelotonData = () => {
  return useContext(PelotonDataContext);
};

// Provider (Ancestor)
export const PelotonDataProvider = ({ children }) => {
  // what does the provider give you access to?
  const [state, dispatch] = useReducer(pelotonReducer, initialState);

  return (
    <PelotonDataContext.Provider value={{ state, dispatch }}>
      {children}
    </PelotonDataContext.Provider>
  );
};
