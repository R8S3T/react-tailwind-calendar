import React, { useState } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';
import CalendarNavigation from './CalendarNavigation';
import CreateCalendarRows from './CreateCalendarRows';

const Calendar = ({events, setEvents, selectedDate, setSelectedDate}) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const handleNextMonth = () => {
        setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1));
    }

    const handlePreviousMonth = () => {
        setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1));
    }

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    const calendarRows = CreateCalendarRows(currentDate.getFullYear(), currentDate.getMonth());

    return (
        <div id="calendar" className="col-span-1 bg-my-blue p-4 h-full">
            <CalendarNavigation
                onNextMonth={handleNextMonth}
                onPreviousMonth={handlePreviousMonth}
                currentDate={currentDate}
            />
            <div className='grid grid-cols-7 gap-3'>
                <CalendarHeader />
                <CalendarBody
                    calendarRows={calendarRows}
                    handleDateClick={handleDateClick}
                    events={events}
                    currentDate={currentDate}
                />
            </div>
        </div>
    );
}

export default Calendar;
