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
    <div className="grid grid-rows-4 grid-cols-4 gap-4 bg-gray-300 h-screen">
      <div className="row-span-4 col-span-2">
          <Calendar />
      </div>
          <div className="row-span-2 col-span-2">
          <DayContainer />
          </div>
          <div className="row-span-2 col-span-2">
            <RecipeContainer />
          </div>
        </div>
  );
};

export default App;