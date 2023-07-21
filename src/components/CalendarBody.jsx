import React from 'react';
import { isCurrentDay } from './CurrentDay';
import { getEventColor } from './GetIcons';

/* console.log(events); */

const CalendarBody = ({ calendarRows, handleDateClick, events }) => {
    console.log(events);
    const isCurrentMonth = (date) => {
        const currentDate = new Date();
        return (
            date.getMonth() === currentDate.getMonth() &&
            date.getFullYear() === currentDate.getFullYear()
        );
    };

    const getEventForDate = (date) => {
        const dateString = date.toISOString().substring(0, 10);
        return events.filter((event) => new Date(event.date).toISOString().substring(0,10) === dateString);
    };

    return (
        <tbody>
            {calendarRows.map((week, index) => (
                <tr key={index}>
                    {week.map((date, cellIndex) => {
                        const event = getEventForDate(date);
                        const eventColorClass = event ? `bg-${getEventColor(event.type)}-600` : '';
                        const textColorClass = isCurrentMonth(date) ? 'text-black' : 'text-gray-500';

                        return (
                            <td
                                key={cellIndex}
                                onClick={() => handleDateClick(date)}
                                className={`text-xl p-4 ${textColorClass}`}
                            >
                                <div className={`flex items-center justify-center`}>
                                    {date.getDate()}
                                    {isCurrentDay(date) && <div className="w-2 h-2 bg-red-500 rounded-full ml-1"></div>}
                                    {event.map(e =>
                                        <p
                                            key={e.title}
                                            className="text-xs rounded py-025 px-0.25"
                                            style={{ backgroundColor: event ? getEventColor(e.type) : 'transparent' }}
                                        >
                                            {e.title}
                                        </p>
                                    )}
                                </div>
                            </td>
                        );
                    })}
                </tr>
            ))}
        </tbody>
    );
};

export default CalendarBody;


