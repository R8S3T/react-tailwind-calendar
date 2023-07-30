import React, { useState, useEffect } from "react";
import { getEventsForDate } from "./GetEventsForDate";

const EditEventModal = ({ show, onClose, selectedDate, events, onEventDelete, setSelectedEvents, selectedEvents }) => {
    const eventsForSelectedDay = getEventsForDate(events, selectedDate || new Date());

    console.log("In EditEventModal, onEventDelete is", typeof onEventDelete);

    useEffect(() => {
        // Clear selected events when selectedDate changes
        setSelectedEvents([]);
    }, [selectedDate]);

    return show ? (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden='true'>
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden='true'>&#8203;</span>
                <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb4">
                        <h2 className="text-lg leading-6 font-medium- text-gray-900 mb-4">Edit Event</h2>
                        {eventsForSelectedDay.map((event, index) => (
                            <div key={index} className="flex items-center space-between mb-2">
                                <input 
                                    type="checkbox" 
                                    checked={selectedEvents.includes(event)} 
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setSelectedEvents(prev => [...prev, event]);
                                        } else {
                                            setSelectedEvents(prev => prev.filter(selectedEvent => selectedEvent !== event));
                                        }
                                    }}
                                />
                                <span className="ml-2">{event.title}</span>
                            </div>
                        ))}
                        <div className="flex flex-col sm:flex-row justify-between mt-4">
                        <button
                            onClick={() => onEventDelete()}
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-400 text-base font-medium text-white hover:bg-red-700 focus:outline-none sm:mt-0 sm:ml-2 sm:w-auto sm:text-sm"
                        >
                            Delete
                        </button>
                            <button
                                onClick={onClose}
                                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-2 sm:w-auto sm:text-sm"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
};

export default EditEventModal;



