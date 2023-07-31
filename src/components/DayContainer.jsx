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
        <div className="h-full overflow-auto bg-my-green p-4 flex-grow flex flex-col justify-between relative">
        <div className="my-4">
            <div className="flex items-center justify-center">
                <h2 className="text-base sm:text-xs md:text-lg lg:text-2xl mb-4">
                    {`${userName}'s Day `}
                    <UserAvatar className="inline-block w-8 sm:w-10 md:w-12 lg:w-16 xl:w-20 h-8 sm:h-10 md:h-12 lg:h-16 xl:h-16 mx-2" email={userEmail} />
                    {selectedDay ? selectedDay.toDateString() : "None"}
                </h2>
            </div>
            <Link to="/settings" className="absolute top-2 right-2 md:top-1.5 md:right-1.5 hover:text-blue-600">
                <FaCog size={24} className="sm:mr-2 md:mr-0" />
            </Link>
        <div className="flex flex-wrap justify-center items-center">
            {eventsForSelectedDay.length > 0 ? (
                eventsForSelectedDay.map((event, index) => {
                    const eventColor = getEventColor(event.type);
                    return (
                        <li key={index} className="flex items-center space-x-2 w-2/5 p-1">
                            <span style={{backgroundColor: eventColor}} className="p-2 rounded"></span>
                            <span className="sm:text-xs md:text-sm lg:text-base">{event.title}</span>
                        </li>
                    );
                })
            ) : (
            <div className="w-full h-full flex items-center justify-center flex-col">
                <p className="lg:text-lg md:text-xs">There's nothing to do today.</p>
                <p className="lg:text-lg md:text-xs">Enjoy!</p>
            </div>
            )}
        </div>
    </div>
            <div className="mt-2 flex justify-between">
            <button 
                onClick={() => setModalVisible(true)} 
                className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 sm:px-2 sm:py-1 bg-button-color text-base font-medium text-white sm:text-sm hover:bg-button-color-hover focus:outline-none"
            >
                Create Event
            </button>
            {eventsForSelectedDay.length > 0 &&
                <button
                    onClick={() => setEditModalVisible(true)}
                    className='inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 sm:px-2 sm:py-1 bg-button-color text-base font-medium text-white sm:text-sm hover:bg-button-color-hover focus:outline-none'
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

