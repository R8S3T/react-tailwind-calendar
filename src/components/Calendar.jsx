import React, { useState } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';
import CalendarNavigation from './CalendarNavigation';
import CreateCalendarRows from './CreateCalendarRows';
import { handleInputChange, handleAddEvent } from './EventHandling';
import EventModal from './EventModal';

const Calendar = ({events, setEvents, selectedDate, setSelectedDate}) => {
    const [newEvent, setNewEvent] = useState('');
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [modalVisible, setModalVisible] = useState(false);
    const [eventType, setEventType] = useState('Work');

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
        handleAddEvent(newEvent, selectedDate, eventType, setEvents, setNewEvent, setSelectedDate, setEventType);
        setModalVisible(false);
    }

    const calendarRows = CreateCalendarRows(currentYear, currentMonth);

    return (
        <div id="calendar" className="col-span-1 bg-my-blue p-4 flex-grow h-full">
            <CalendarNavigation
                onNextMonth={handleNextMonth}
                onPreviousMonth={handlePreviousMonth}
                currentMonth={currentMonth}
                currentYear={currentYear}
            />
            <table className='w-full h-auto'>
                <CalendarHeader />
                <CalendarBody
                    calendarRows={calendarRows}
                    handleDateClick={handleDateClick}
                    events={events}
                />
            </table>
            <EventModal
                show={modalVisible}
                onClose={handleCloseModal}
                onInputChange={handleEventInputChange}
                onAddEvent={handleEventAdd}
                newEvent={newEvent}
                eventType={eventType}
                setEventType={setEventType}
            />
        </div>
    );
}

export default Calendar;
