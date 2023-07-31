import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SettingsPage = () => {
    const [name, setName] = useState(localStorage.getItem('userName') || '');
    const [email, setEmail] = useState(localStorage.getItem('userEmail') || '');
    const navigate = useNavigate();
    const [emailError, setEmailError] = useState(null);
    const [preference, setPreference] = useState({
        category: '',
        area: '',
        ingredient: '',
    });

    const categories = ['Seafood', 'Vegetarian', 'Vegan', 'Beef'];
    const areas = ['Canadian', 'Italian', 'Mexican', 'Indian'];
    const ingredients = ['Chicken', 'Tomatoes', 'Beef', 'Onions'];

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (e.target.value.trim() === '') {
            setEmailError('Email is required for creating a unique avatar.');
        } else {
            setEmailError(null);
        }
    }

    const saveSettings = () => {
        if (email.trim() === '') {
            setEmailError('Email is required for creating a unique avatar.');
            return;
        }
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('preference', JSON.stringify(preference));

        // Redirect to main page
        navigate('/');
    }

    useEffect(() => {
        const savedPreference = localStorage.getItem('preference');
        if (savedPreference) {
            setPreference(JSON.parse(savedPreference));
        }
    }, []);

    const handleSelectChange = (e) => {
        const updatedPreference = {...preference, [e.target.name]: e.target.value};
        setPreference(updatedPreference);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 px-4 py-2">
            <h1 className="text-3xl font-bold mb-4">Settings</h1>
            <form className="bg-white shadow-md rounded px-12 pt-6 pb-8 mb-4 max-w-lg w-full">
                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-bold mb-2">
                        Name:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="name" value={name} onChange={handleNameChange} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-bold mb-2">
                        Email: <span className="text-red-500">*</span>
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="email" value={email} onChange={handleEmailChange} />
                    {emailError && <p className="text-red-500 text-xs italic">{emailError}</p>}
                    <p className="text-gray-600 text-xs italic">*This field is required to create a unique avatar.</p>
                </div>
                <div className="mb-4">
                    <h2 className="block text-gray-700 text-lg font-bold mb-2">Meal Preferences</h2>
                    <label className="block text-gray-700 text-md mb-2">
                        Food Category:
                    </label>
                    <select className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="category" value={preference.category} onChange={handleSelectChange}>
                        <option value="">--Surprise Me--</option>
                        {categories.map(category => <option value={category}>{category}</option>)}
                    </select>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-md mb-2">
                        Ingredient:
                    </label>
                    <select className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="ingredient" value={preference.ingredient} onChange={handleSelectChange}>
                        <option value="">--Surprise Me--</option>
                        {ingredients.map(ingredient => <option value={ingredient}>{ingredient}</option>)}
                    </select>
                </div>
                <div className="flex items-center justify-end">
                    <button className="bg-button-color hover:bg-button-color-hover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={saveSettings}>
                        Save Settings
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SettingsPage;






