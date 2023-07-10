// This file is  used for the root component.
// Define your application's overall structure here.
// This might include things like defining routes
// (if using React Router), setting up global state
// (if using something like Redux or the Context API),
// and rendering top-level components that are shared across all pages.


import React, { useState } from "react";
import Calendar from "./Calendar";
import DayContainer from "./DayContainer";
import RecipeContainer from "./RecipeContainer";

const App = () => {

  return (
    <div className="h-screen flex  bg-gray-300">
      <div className="flex-grow">
        <div className="h-full p-2">
          <Calendar />
        </div>
      </div>
        <div className="w-1/2 flex flex-col">
          <div className="flex-grow h-2/3 p-2 flex flex-col">
          <DayContainer />
          </div>
          <div className="flex-grow h-1/2 p-2 flex flex-col">
            <RecipeContainer />
          </div>
        </div>
    </div>
  );
};

export default App;