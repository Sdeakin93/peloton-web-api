import "./styles.css";
import React from "react";
import { PelotonDataProvider } from "./context";
import pelotonlogo from "./peloton-logo.png";

// Components
import { Search } from "./components/search";
import { Results } from "./components/results";
import { WorkoutList } from "./components/workouts/list";

function App() {
  return (
    <div className="App">
      <PelotonDataProvider>
        <h1>Peloton API tool</h1>
        <div className="logo">
          <img src={pelotonlogo} height="50%" width="50%" alt="Peloton logo" />
        </div>
        <Search />
        <Results />
        <WorkoutList />
      </PelotonDataProvider>
    </div>
  );
}

export default App;
