// on default the current day will be displayed here.
// if the user clicks on another day, that one will be displayed instead
// with option to go back to current day

const DayContainer = ({ events, selectedDay }) => {
  return (
    <div className="bg-my-green p-4 flex-grow h-full">
    <h2 className="text-xl font-bold">Rebecca's Day</h2>
    <h3 className="text-sm">There's nothing to do today... Enjoy!</h3>
  </div>
  );
};

export default DayContainer;