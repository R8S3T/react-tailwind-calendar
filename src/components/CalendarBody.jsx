import React from 'react';
import { isCurrentDay } from './CurrentDay';
import { getEventColor } from './GetEventColor';
import { getEventsForDate } from './GetEventsForDate';

const CalendarBody = ({ calendarRows, handleDateClick, events, currentDate }) => {
    console.log(events);

    return calendarRows.map((week, index) => (
        week.map((date, cellIndex) => {
            const eventsForDate = getEventsForDate(events, date);
            console.log(eventsForDate);
            const textColorClass = date.getMonth() === currentDate.getMonth() ? 'text-black' : 'text-gray-500';

            return (
                <div
                    key={cellIndex}
                    onClick={() => handleDateClick(date)}
                    className={`flex flex-col items-start p-4 ${textColorClass}`}
                >
                <div className="flex items-center">
                    <span className="text-base md:text-lg sm:text-base xs:text-sm ">{date.getDate()}</span>
                    {isCurrentDay(date) && <div className="w-2 h-2 bg-red-500 rounded-full ml-2"></div>}
                </div>
                    {eventsForDate.length > 0 && eventsForDate.map((event, i) => (
                        <p
                            key={i}
                            style={{backgroundColor: getEventColor(event.type)}}
                            className={`text-gray-700 text-xxs md:text-xs rounded mt-0.25 w-20 text-left`}
                        >
                            {event.title.length > 6 ? `${event.title.substring(0, 6)}...` : event.title}
                        </p>
                    ))}
                </div>
            );
        })
    ));
};

export default CalendarBody;







