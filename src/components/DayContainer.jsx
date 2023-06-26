import RecipeContainer from "./RecipeContainer.jsx";


const DayContainer = () => {
    return (
      <div className="columns-4">
        <div className="bg-my-green p-4 row-span-1 flex-grow">Day Container</div>
        <RecipeContainer />
      </div>
    );
  };
  
  export default DayContainer;