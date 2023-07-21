import React, { useState } from 'react';
import { getEventColor } from './GetIcons';
import { FaBriefcase, FaBirthdayCake, FaUsers, FaUserAlt } from 'react-icons/fa';

const EventIcons = ({ selectedType, onIconClick }) => (
    <div className='flex justify-around mt-4'>
        <FaBriefcase
            size={32}
            onClick={() => onIconClick('Work')}
            className={selectedType === 'Work' ? 'text-blue-600' : ''}
        />
        <FaUsers
            size={32}
            onClick={() => onIconClick('Friends/Family')}
            className={selectedType === 'Friends/Family' ? 'text-green-600' : ''}
        />
        <FaBirthdayCake
            size={32}
            onClick={() => onIconClick('Birthdays')}
            className={selectedType === 'Birthdays' ? 'text-red-600' : ''}
        />
        <FaUserAlt
            size={32}
            onClick={() => onIconClick('Other')}
            className={selectedType === 'Other' ? 'text-gray-600' : ''}
        />
    </div>
);

export default EventIcons;
