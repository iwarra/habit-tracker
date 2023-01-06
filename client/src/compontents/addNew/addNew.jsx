// starting a page for adding new habits

const addNew = () => {
  return (
    <div>
      <h1>Create New Habit</h1>
      <label htmlFor="newHabit">Add new:</label>
      <input id="newHabit" type="text" />
    </div>
  );
};

export default addNew;
