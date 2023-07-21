import { FaBriefcase, FaBirthdayCake, FaUsers, FaUserAlt } from "react-icons/fa";

const eventTypeColor = {
    'Work': 'blue',
    'Friends/Family': 'green',
    'Birthdays': 'red',
    'Unknown': 'gray'
};

export const getEventColor = (eventType) => {
    return eventTypeColor[eventType] || eventTypeColor['Unknown'];
}

const GetIcons = ({ eventType }) => {
    switch (eventType) {
        case 'Work':
            return <FaBriefcase />;
        case 'Friends/Family':
            return <FaUsers />;
        case 'Birthdays':
            return <FaBirthdayCake />;
        default:
            return <FaUserAlt />;
    }
}

export default GetIcons;