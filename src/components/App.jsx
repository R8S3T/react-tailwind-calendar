// This file is  used for the root component.
// Define your application's overall structure here.
// This might include things like defining routes
// (if using React Router), setting up global state
// (if using something like Redux or the Context API),
// and rendering top-level components that are shared across all pages.


import React from "react";
import Calendar from "./Calendar.jsx";
import DayContainer from "./DayContainer.jsx";

const App = () => {
  return (
    <div className="p-6 flex flex-col grid grid-cols-2 grid-rows-2 gap-2 bg-grey-100 h-screen">
      <Calendar />
      <DayContainer />
    </div>
  );
};

export default App;