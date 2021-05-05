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
    <div class="min-h-screen bg-gray-100 dark:bg-gray-800 py-6 flex flex-col justify-center sm:py-12">
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div class="relative px-4 py-10 bg-white dark:bg-gray-800 shadow-lg sm:rounded-3xl sm:p-20">
          <div class="py-8 text-gray-900 text-lg sm:leading-1 dark:text-white">
            <PelotonDataProvider>
              <img class="filter invert" src={pelotonlogo} alt="Peloton logo" />
              <h1 class="font-bold text-5xl py-6 text-center dark:text-white">
                Peloton API tool
              </h1>
              <p class="flex justify-center">Built by Sarah Deakin</p>
              <p class="flex justify-center">
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
