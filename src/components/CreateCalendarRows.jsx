const CreateCalendarRows = (currentYear, currentMonth) => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const startDay = new Date(currentYear, currentMonth, 1).getDay();
    const totalCells = Math.ceil((daysInMonth + startDay) / 7) * 7;
    const calendarDates = Array.from({ length: totalCells }, (_, index) => {
        const day = index - startDay + 1;
        return new Date(currentYear, currentMonth, day);
    });

    const calendarRows = [];
    for (let i = 0; i < calendarDates.length; i += 7) {
        const week = calendarDates.slice(i, i + 7);
        calendarRows.push(week)
    }

    return calendarRows;
}

export default CreateCalendarRows;