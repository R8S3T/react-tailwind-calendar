import React from "react";

const CalendarHeader = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days.map((day, index) => (
        <div
            key={index}
            className="flex items-center justify-center p-2 bg-my-green rounded-md text-sm md:text-base lg:text-xl text-center mt-6 mb-2"
        >
            {day}
        </div>
    ));
}

export default CalendarHeader;




