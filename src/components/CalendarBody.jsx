import React from 'react';
import { isCurrentDay } from './CurrentDay';
import { getEventColor } from './GetEventColor';
import { getEventsForDate } from './GetEventsForDate';

const CalendarBody = ({ calendarRows, handleDateClick, events, currentDate }) => {
    console.log(events);

    return calendarRows.map((week, index) => (
        week.map((date, cellIndex) => {
            const eventsForDate = getEventsForDate(events, date);
            const textColorClass = date.getMonth() === currentDate.getMonth() ? 'text-black' : 'text-gray-500';

            return (
                <div
                    key={cellIndex}
                    onClick={() => handleDateClick(date)}
                    className={`flex flex-col items-center p-1 md:p-1 lg:p-4 w-16 md:w-auto h-16 md:h-auto ${textColorClass}`}

                >
                <div className="flex items-center">
                    <span className="text-sm md:text-base lg:text-lg">{date.getDate()}</span>
                    {isCurrentDay(date) && <div className="w-2 h-2 bg-red-500 rounded-full ml-2"></div>}
                </div>
                {eventsForDate.length > 0 && eventsForDate.map((event, i) => (
                    <div
                        key={i}
                        className={`flex items-center justify-center lg:justify-start text-gray-700 text-xxs lg:text-xs rounded mt-0.25 w-10 text-left`}
                    >
                        <span className={`w-3.5 rounded-full event-color-line lg:hidden`} style={{backgroundColor: getEventColor(event.type)}}></span>
                        <p className="hidden lg:block event-color-line event-text" style={{backgroundColor: getEventColor(event.type), padding: "0.5px"}}>
                            {event.title.length > 4 ? `${event.title.substring(0, 4)}...` : event.title}
                        </p>
                    </div>
                ))}
                </div>
            );
        })
    ));
};

export default CalendarBody;









