import React, { useState } from "react";

const SettingsPage = () => {
    const [name, setName] = useState(localStorage.getItem('userName') || '');

    const handleNameChange = (e) => {
        setName(e.target.value);
        localStorage.setItem('userName', e.target.value);
    }

    return (
        <div>
            <h1>Settings</h1>
            <label>
                Your name:
                <input type='text' value={name} onChange={handleNameChange} />
            </label>
        </div>
    );
};

export default SettingsPage;