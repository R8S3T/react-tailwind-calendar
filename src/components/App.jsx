// This file is  used for the root component.
// Define your application's overall structure here.
// This might include things like defining routes
// (if using React Router), setting up global state
// (if using something like Redux or the Context API),
// and rendering top-level components that are shared across all pages.

import React, { useState, useEffect } from "react";
import Calendar from "./Calendar";
import DayContainer from "./DayContainer";
import RecipeContainer from "./RecipeContainer";

const App = () => {
    const [events, setEvents] = useState(JSON.parse(localStorage.getItem('events')) || []);
    const [selectedDate, setSelectedDate] = useState(null);

    // Use an effect to update localStorage whenever the events state changes
    useEffect(() => {
        localStorage.setItem('events', JSON.stringify(events));
    }, [events]);
    return (
        <div className="grid grid-rows-4 grid-cols-4 gap-4 bg-gray-300 h-screen">
            <div className="row-span-4 col-span-2">
                <Calendar
                    events={events}
                    setEvents={setEvents}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                />
            </div>
            <div className="row-span-2 col-span-2">
                <DayContainer
                    events={events}
                    selectedDay={selectedDate}
                />
            </div>
            <div className="row-span-2 col-span-2">
                <RecipeContainer />
            </div>
        </div>
    );
};


export default App;