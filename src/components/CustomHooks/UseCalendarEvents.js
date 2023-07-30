import { useState } from "react";

const useCalendarEvents = (initialEvents) => {
    const [events, setEvents] = useState(initialEvents || []);

    const handleEventAdd = (newEvent, eventType, selectedDay) => {
        if(selectedDay) {
            const date = selectedDay.toDateString();
            setEvents([...events, { title: newEvent, type: eventType, date }]);
        } else {
            // Handle the case when selectedDay is undefined. Maybe show an error or set a default date.
            console.error("selectedDay is undefined!");
        }
    };


    const handleEventDelete = (eventsToDelete) => {
        console.log("In useCalendarEvents, handleEventDelete is", typeof handleEventDelete);

        setEvents(events => events.filter(event => !eventsToDelete.includes(event)));
    };


    const handleEventEdit = (oldEvent, updatedEvent) => {
        const index = events.indexOf(oldEvent);
        if (index !== -1) {
            const updatedEvents = [...events];
            updatedEvents[index] = updatedEvent;
            setEvents(updatedEvents);
        }
    };

    return { events, handleEventAdd, handleEventDelete, handleEventEdit};
};

export default useCalendarEvents;