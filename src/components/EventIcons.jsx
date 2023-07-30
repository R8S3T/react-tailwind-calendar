import React from 'react';

export const eventTypes = [
    { name: 'Work', color: 'bg-blue-600' },
    { name: 'Friends/Family', color: 'bg-green-600' },
    { name: 'Birthdays', color: 'bg-red-600' },
    { name: 'Other', color: 'bg-gray-600' },
];

const EventIcons = ({ selectedType, onIconClick }) => (
    <div className="flex justify-around mt-4">
        {eventTypes.map(({ name, color }) => (
            <div
                key={name}
                className={`flex flex-col items-center cursor-pointer ${selectedType === name ? color : ''}`}
                onClick={() => onIconClick(name)}
            >
                <div
                    className={`rounded py-1 px-2 text-sm mt-2 ${selectedType === name ? 'text-white' : 'text-gray-800'} ${selectedType === name ? color : 'bg-gray-200'}`}
                >
                    {name}
                </div>
            </div>
        ))}
    </div>
);

export default EventIcons;


