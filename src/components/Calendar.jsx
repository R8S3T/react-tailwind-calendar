import React, { useState } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';
import CalendarNavigation from './CalendarNavigation';
import CreateCalendarRows from './CreateCalendarRows';
import { handleInputChange, handleAddEvent } from './EventHandling';
import EventModal from './EventModal';

const Calendar = () => {
    const [events, setEvents] = useState([]);
    const [newEvent, setNewEvent] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [modalVisible, setModalVisible] = useState(false);

    const handleNextMonth = () => {
        setCurrentMonth((prevMonth) => prevMonth + 1);
    }

    const handlePreviousMonth = () => {
        setCurrentMonth((prevMonth) => prevMonth - 1);
    }

    const handleDateClick = (date) => {
        setSelectedDate(date);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const handleEventInputChange = (e) => {
        handleInputChange(e, setNewEvent);
    };

    const handleEventAdd = () => {
        handleAddEvent(newEvent, selectedDate, setEvents, setNewEvent, setSelectedDate);
        setModalVisible(false);
    }

    const calendarRows = CreateCalendarRows(currentYear, currentMonth);

    return (
        <div id="calendar" className="col-span-1 bg-my-blue p-2 flex-grow h-full">
            <CalendarNavigation
                onNextMonth={handleNextMonth}
                onPreviousMonth={handlePreviousMonth}
                currentMonth={currentMonth}
                currentYear={currentYear}
            />
            <table className='w-full h-full'>
                <CalendarHeader />
                <CalendarBody
                    calendarRows={calendarRows}
                    handleDateClick={handleDateClick}
                />
            </table>
            <EventModal
                show={modalVisible}
                onClose={handleCloseModal}
                onInputChange={handleEventInputChange}
                onAddEvent={handleEventAdd}
                newEvent={newEvent}
            />
            <div>
                <h3>Events</h3>
                {events.map((event, index) => (
                <div key={index}>
                    <p>{event.date.toDateString()}: {event.title}</p>
                </div>
                ))}
            </div>
        </div>
    );
}

export default Calendar;
