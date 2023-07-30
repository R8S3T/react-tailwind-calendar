export const getEventColor = (eventType) => {
    const eventColors = {
        'Work': "#c4c1e0",
        'Friends/Family': "#c06c84",
        'Birthdays': "#d59bf6",
        'Other': "#79c2d0",
    };

    console.log(`Event Type: ${eventType}, Color: ${eventColors[eventType]}`);
    
    return eventColors[eventType];
};
