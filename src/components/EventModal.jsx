import React, { useState } from 'react';
import { getEventsForDate } from './GetEventsForDate';
import { getEventColor } from './GetEventColor';

const EventModal = ({ show, onClose, onAddEvent, onInputChange, newEvent, eventType, setEventType, selectedDate, events }) => {
    let existingEvents = [];
    const eventTypes = ['Work', 'Friends/Family', 'Birthdays', 'Other'];
    
    if (selectedDate) {
        const dateObj = new Date(selectedDate);
        existingEvents = getEventsForDate(events, dateObj);
    }

    const handleIconClick = (type) => {
        setEventType(type);
    }

    if (!show) {
        return null;
    }

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <h3 className="font-semibold text-sm">Add New Event:</h3>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
                            <input
                                type="text"
                                value={newEvent} 
                                onChange={onInputChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3 sm:mb-0 sm:mr-3"
                                placeholder="Event name"
                            />
                            <div className="flex justify-around mt-4">
                                {eventTypes.map((type) => (
                                    <div
                                        key={type}
                                        className={`flex flex-col items-center cursor-pointer ${eventType === type ? 'text-white' : 'text-gray-800'}`}
                                        onClick={() => handleIconClick(type)}
                                        style={{ backgroundColor: getEventColor(type) }}
                                    >
                                        <div className={`rounded py-1 px-2 text-sm mt-2`}>
                                            {type}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between">
                            <button
                                onClick={() => {
                                    onAddEvent(newEvent, eventType, selectedDate);
                                    onClose();
                                }}
                                className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-400 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:mt-0 sm:ml-2 sm:w-auto sm:text-sm">Add Event</button>
                            <button onClick={onClose} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventModal;
