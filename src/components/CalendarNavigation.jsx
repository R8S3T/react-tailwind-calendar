import React from 'react';

const CalendarNavigation = ({ onNextMonth, onPreviousMonth, currentMonth, currentYear }) => {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = monthNames[currentMonth];

    return (
        <div className="flex justify-between items-center bg-grey-200 px-4 py-2">
            <button onClick={onPreviousMonth}>Previous</button>
            <div>
                <span>{month} </span>
                <span>{currentYear}</span>
            </div>
            <button onClick={onNextMonth}>Next</button>
        </div>
    );
}

export default CalendarNavigation;
