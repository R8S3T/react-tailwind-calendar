import React, { useState, useEffect} from 'react';


const Calendar = () => {
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const [currentDate, setCurrentDate] = useState(new Date());
    const [monthYear, setMonthYear] = useState('');
    const [calendarBody, setCalendarBody] = useState([]);

    useEffect(() => {
        generateCalendar();
    }, [currentDate]);

    const generateCalendar = () => {
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();
        setMonthYear(`${months[month]} ${year}`);
        const firstDay = new Date(year, month, 0).getDay();
        const lastDay = new Date(year, month + 1, 0).getDate();

        let date = 1;
        let weeks = [];
        for (let week = 0; week < 6; week++) {
        let days = [];
        for (let day = 0; day < 7; day++) {
            if (week === 0 && day < firstDay) {
            days.push('');
            } else if (date > lastDay) {
            days.push('');
            } else {
            days.push(date++);
            }
        }
        weeks.push(days);
        }
        setCalendarBody(weeks);
    };

    const handlePrevMonth = () => {
        setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1));
    };

    return (
        <div id="calendar" className="col-span-1 bg-my-blue p-4 flex-grow">
        <div className="flex justify-between bg-grey-200">
            <button id="prevBtn" onClick={handlePrevMonth}> &lt; Prev </button>
            <h2 id="monthYear"> {monthYear} </h2>
            <button id="nextBtn" onClick={handleNextMonth}> Next &gt; </button>
        </div>
        <table className="w-full h-full">
            <thead>
            <tr className="bg-my-green">
                {daysOfWeek.map((day, i) => <th key={i} className="bg-my-grey p-4 text-center">{day}</th>)}
            </tr>
            </thead>
            <tbody id="calendarBody">
            {calendarBody.map((week, i) =>
                <tr key={i}>
                {week.map((day, j) => 
                    <td key={j} className="text-center">
                    {day}
                    </td>
                )}
                </tr>
            )}
            </tbody>
        </table>
        </div>
    );
    };

    export default Calendar;
