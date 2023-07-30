// This file is  used for the root component.
// Define your application's overall structure here.
// This might include things like defining routes
// (if using React Router), setting up global state
// (if using something like Redux or the Context API),
// and rendering top-level components that are shared across all pages.

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calendar from "./Calendar";
import DayContainer from "./DayContainer";
import TodoListContainer from "./TodoListContainer";
import RecipeContainer from "./RecipeContainer";
import { handleInputChange } from './EventHandling';
import SettingsPage from './SettingsPage';
import useCalendarEvents from "./CustomHooks/UseCalendarEvents";


const MainPage = ({ events, handleEventAdd, handleEventDelete, handleEventEdit}) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [newEvent, setNewEvent] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [eventType, setEventType] = useState('Work');

    const handleEventInputChange = (e) => {
        handleInputChange(e, setNewEvent);
    };

    return (
        <div className="grid grid-rows-3 grid-cols-4 gap-4 bg-gray-300 h-screen p-4">
            <div className="row-span-3 col-span-2">
                <Calendar
                    events={events}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                />
            </div>
            <div className="row-span-1 col-span-2">
                <DayContainer
                    events={events}
                    selectedDay={selectedDate}
                    setSelectedDay={setSelectedDate}
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    handleEventInputChange={handleEventInputChange}
                    handleEventAdd={handleEventAdd}
                    newEvent={newEvent}
                    eventType={eventType}
                    setEventType={setEventType}
                    handleEventDelete={handleEventDelete}
                    handleEventEdit={handleEventEdit}
                />
            </div>
            <div className="row-span-1 col-span-2">
                <TodoListContainer />
            </div>
            <div className="row-span-1 col-span-2">
                <RecipeContainer />
            </div>
        </div>
    );
};

const App = () => {
    const { events, handleEventAdd, handleEventDelete, handleEventEdit } = useCalendarEvents(JSON.parse(localStorage.getItem('events')) || []);

    // Use an effect to update localStorage whenever the events state changes
    useEffect(() => {
        localStorage.setItem('events', JSON.stringify(events));
    }, [events]);

    return (
        <Router>
            <Routes>
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="*" element={<MainPage events={events} handleEventAdd={handleEventAdd} handleEventDelete={handleEventDelete} handleEventEdit={handleEventEdit} />} />
            </Routes>
        </Router>
    );
};

export default App;


/* 
const App = () => {
    const { events, handleEventAdd, handleEventDelete, handleEventEdit } = useCalendarEvents(JSON.parse(localStorage.getItem('events')) || []);

    const [selectedDate, setSelectedDate] = useState(null);
    const [newEvent, setNewEvent] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [eventType, setEventType] = useState('Work');

    const handleEventInputChange = (e) => {
        handleInputChange(e, setNewEvent);
    };

    // Use an effect to update localStorage whenever the events state changes
    useEffect(() => {
        localStorage.setItem('events', JSON.stringify(events));
    }, [events]);

    return (
        <div className="grid grid-rows-3 grid-cols-4 gap-4 bg-gray-300 h-screen p-4">
            <div className="row-span-3 col-span-2">
                <Calendar
                    events={events}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                />
            </div>
            <div className="row-span-1 col-span-2">
                <DayContainer
                    events={events}
                    selectedDay={selectedDate}
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    handleEventInputChange={handleEventInputChange}
                    handleEventAdd={handleEventAdd}
                    newEvent={newEvent}
                    eventType={eventType}
                    setEventType={setEventType}
                    handleEventDelete={handleEventDelete} // Passed down to DayContainer
                    handleEventEdit={handleEventEdit} // Passed down to DayContainer
                />
            </div>
            <div className="row-span-1 col-span-2">
                <TodoListContainer />
            </div>
            <div className="row-span-1 col-span-2">
                <RecipeContainer />
            </div>
        </div>
    );
};

export default App;
 */

