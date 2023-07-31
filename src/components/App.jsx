// This file is  used for the root component.
// Define your application's overall structure here.
// This might include things like defining routes
// (if using React Router), setting up global state
// (if using something like Redux or the Context API),
// and rendering top-level components that are shared across all pages.

import React, { useState, useEffect } from "react";
import '../App.css';
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
        <div className="grid grid-cols-1 gap-4 bg-gray-300 h-screen p-4 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-3">
            <div className="col-span-1 sm:col-span-2 md:col-span-2 md:row-span-3">
                <Calendar
                    events={events}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                />
            </div>
            <div className="col-span-1 sm:col-span-2 md:col-span-2 md:row-span-1">
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
            <div className="col-span-1 sm:col-span-2 md:col-span-2 md:row-span-1">
                <TodoListContainer />
            </div>
            <div className="col-span-1 sm:col-span-2 md:col-span-2 md:row-span-1">
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



