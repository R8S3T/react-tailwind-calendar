export const getEventsForDate = (events, date) => {
    if (date === null || typeof date.toISOString !== 'function') {
        console.log('Invalid date:', date);
        return [];
    }
    
    console.log(date.toISOString(), events);
    const dateString = date.toISOString().substring(0, 10);
    return events.filter((event) => new Date(event.date).toISOString().substring(0, 10) === dateString);
};

