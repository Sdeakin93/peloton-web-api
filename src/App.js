import "./index.css";
import React from "react";
import { PelotonDataProvider } from "./context";
import pelotonlogo from "./peloton-logo.png";

// Components
import { Search } from "./components/search";
import { Results } from "./components/results";
import { WorkoutList } from "./components/workouts/list";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white dark:bg-gray-800 shadow-lg sm:rounded-3xl sm:p-20">
          <div className="py-8 text-gray-900 text-lg sm:leading-1 dark:text-white">
            <PelotonDataProvider>
              <h1 className="font-bold text-5xl py-6 text-center dark:text-white">
                Peloton API tool
              </h1>
              <img
                className="filter invert"
                src={pelotonlogo}
                alt="Peloton logo"
              />
              <p className="flex justify-center">Built by Sarah Deakin</p>
              <p className="flex justify-center">
                <a
                  href="https://github.com/Sdeakin93/peloton-web-api"
                  target="_blank"
                >
                  Check out the code on Github
                </a>
              </p>
              <Search />
              <Results />
              <WorkoutList />
            </PelotonDataProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
