import React from 'react';

const CalendarNavigation = ({ onNextMonth, onPreviousMonth, currentDate }) => {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = monthNames[currentDate.getMonth()];

    return (
        <div className="flex justify-between items-center text-xl bg-my-grey-2 px-4 py-2 mt-2">
            <button onClick={onPreviousMonth}>
                <span role="img" aria-label="Previous">
                    &#9664;
                </span>
            </button>
            <div>
                <span>{month} </span>
                <span>{currentDate.getFullYear()}</span>
            </div>
            <button onClick={onNextMonth}>
                <span role="img" aria-label="Next" className='my-blue'>
                    &#9654;
                </span>
            </button>
        </div>
    );
}

export default CalendarNavigation;

