export const handleInputChange = (e, setNewEvent) => {
    setNewEvent(e.target.value);
}

export const handleAddEvent = (newEvent, selectedDate, eventType, setEvents, setNewEvent, setSelectedDate, setEventType) => {
    if (newEvent.trim() !== '' && selectedDate) {
        const event = {
            id: new Date().getTime(), // adding id as timestamp
            date: selectedDate.toDateString(),
            title: newEvent.trim(),
            type: eventType
        };
        setEvents((prevEvents) => {
            const updatedEvents = [...prevEvents, event];
            localStorage.setItem('events', JSON.stringify(updatedEvents));  // Save all events to localStorage
            return updatedEvents;
        });
        setNewEvent('');
        setSelectedDate(null);
        setEventType('Work');
    }
}

