// on default the current day will be displayed here.
// if the user clicks on another day, that one will be displayed instead
// with option to go back to current day

import React, { useState, useEffect } from 'react';
import EventModal from './EventModal';
import { getEventColor } from './GetEventColor';
import EditEventModal from './EditEventModal';
import { Link } from 'react-router-dom';
import { FaCog } from 'react-icons/fa';
import UserAvatar from './UserAvatar';
import useCalendarEvents from './CustomHooks/UseCalendarEvents';


const DayContainer = ({ events, selectedDay, modalVisible, setModalVisible, handleEventInputChange, handleEventAdd, handleEventEdit, handleEventDelete, newEvent, eventType, setEventType, setSelectedDay }) =>{
    const eventsForSelectedDay = events.filter(event => event.date === (selectedDay && selectedDay.toDateString()));

    const [selectedEvents, setSelectedEvents] = useState([]);
    const [editModalVisible, setEditModalVisible] = useState(false);

    const handleDeleteAndClose = () => {
        handleEventDelete(selectedEvents);
        setSelectedEvents([]); // clear selected events
        setEditModalVisible(false); // close the edit modal
    }

    // Set selectedDay to today's date when the component mounts
    useEffect(() => {
        if (selectedDay === null) {
            setSelectedDay(new Date());
        }
    }, []);

    const [userName, setUserName] = useState(localStorage.getItem('userName') || 'Rebecca');
    const [userEmail, setUserEmail] = useState(localStorage.getItem('userEmail') || 'default@email.com');

    useEffect(() => {
        const name = localStorage.getItem('userName');
        const email = localStorage.getItem('userEmail');
        if (name) {
        setUserName(name);
    }
    if (email) {
        setUserEmail(email);
    }
    }, []);

    return (
        <div className="h-full overflow-auto bg-my-green p-4 flex-grow flex flex-col justify-between">
        <div className="my-4">
            <div className="flex items-center justify-center">
                <h2 className="md:text-xl text-3xl mb-6">
                    {`${userName}'s Day `}
                    <UserAvatar className="inline-block w-12 h-12 mx-2" email={userEmail} />
                    {selectedDay ? selectedDay.toDateString() : "None"}
                </h2>
            </div>
            <Link to="/settings" className="absolute top-8 right-12 hover:text-blue-600">
                <FaCog size={30} />
            </Link>
        <div className="flex flex-wrap justify-between">
            {eventsForSelectedDay.length > 0 ? (
                eventsForSelectedDay.map((event, index) => {
                    const eventColor = getEventColor(event.type);
                    return (
                        <li key={index} className="flex items-center space-x-2 w-1/2 p-1">
                            <span style={{backgroundColor: eventColor}} className="p-2 rounded"></span>
                            <span>{event.title}</span>
                        </li>
                    );
                })
            ) : (
                <div className="w-full h-full flex items-center justify-center">
                <h3 
                className="text-md">There's nothing to do today... Enjoy your freetime!</h3>
            </div>
            )}
        </div>
    </div>
    <div className="mt-4 flex justify-between">
        <button 
            onClick={() => setModalVisible(true)} 
            className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-3 py-1 bg-blue-400 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none sm:w-auto sm:text-sm"
        >
            Create Event
        </button>
        {eventsForSelectedDay.length > 0 &&
                <button
                    onClick={() => setEditModalVisible(true)}
                    className='inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-400 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:w-auto sm:text-sm'
                >
                    Edit Event
                </button>
        }
    </div>
    <EventModal
        show={modalVisible}
        onClose={() => setModalVisible(false)}
        onAddEvent={handleEventAdd}
        onInputChange={handleEventInputChange}
        newEvent={newEvent}
        eventType={eventType}
        setEventType={setEventType}
        selectedDate={selectedDay}
        events={events}
    />
    <EditEventModal
        show={editModalVisible}
        onClose={() => setEditModalVisible(false)}
        onEventEdit={handleEventEdit}
        onEventDelete={handleDeleteAndClose}
        selectedDate={selectedDay}
        events={events}
        selectedEvents={selectedEvents}
        setSelectedEvents={setSelectedEvents}
    />
</div>

    );
};

export default DayContainer;

