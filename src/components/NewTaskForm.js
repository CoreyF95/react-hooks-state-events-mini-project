import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [text, setText] = useState()
  const [category, setCategory] = useState(categories[0])

  function handleDetailsChange(event) {
    setText(event.target.value)
  }

  function handleOnChange(event) {
    setCategory(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newTask = {text: text, category: category}
    onTaskFormSubmit(newTask)
  }

  const optionElements = categories.map(category => {
    return <option key={category}>{category}</option>
  });

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleDetailsChange} type="text" name="text"/>
      </label>
      <label>
        Category
        <select onChange={handleOnChange} name="category">
          {/* render <option> elements for each category here */}
          {optionElements}
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
