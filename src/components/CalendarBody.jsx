import React from 'react';
import { isCurrentDay } from './CurrentDay';

const CalendarBody = ({ calendarRows, handleDateClick }) => {
    const isCurrentMonth = (date) => {
        const currentDate = new Date();
        return (
            date.getMonth() === currentDate.getMonth() &&
            date.getFullYear() === currentDate.getFullYear()
        );
    };

    return (
        <tbody>
            {calendarRows.map((week, index) => (
                <tr key={index}>
                    {week.map((date, cellIndex) => (
                        <td
                        key={cellIndex}
                        onClick={() => handleDateClick(date)}
                        className={`text-sm p-4 ${isCurrentMonth(date) ? 'text-black' : 'text-gray-500'}`}
                    >
                        <div className={`flex items-center justify-center`}>
                            {date.getDate()}
                            {isCurrentDay(date) && <div className="w-2 h-2 bg-red-500 rounded-full ml-1"></div>}
                        </div>
                    </td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

export default CalendarBody;

