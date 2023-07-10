export const isCurrentDay = (date) => {
    const currentDate = new Date();
    return (
        date.getDate() === currentDate.getDate() &&
        date.getMonth() === currentDate.getMonth() &&
        date.getFullYear() === currentDate.getFullYear()
    );
};


