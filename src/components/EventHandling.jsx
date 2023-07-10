export const handleInputChange = (e, setNewEvent) => {
    setNewEvent(e.target.value);
}

export const handleAddEvent = (newEvent, selectedDate, setEvents, setNewEvent, setSelectedDate) => {
    if (newEvent.trim() !== '' && selectedDate) {
        const event = {
            date: selectedDate,
            title: newEvent.trim()
        };
        setEvents((prevEvents) => [...prevEvents, event]);
        setNewEvent('');
        setSelectedDate(null);
    }
}