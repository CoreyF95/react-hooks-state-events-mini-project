import React from "react";
import Task from "./Task"

function TaskList({ tasks, handleTaskDeleteFunction }) {
  const tasksArray = tasks.map((tasks, index) => {
    return <Task
      text={tasks.text}
      category={tasks.category}
      key={index}
      onDeleteTask={handleTaskDeleteFunction}
    />
  })
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasksArray}
    </div>
  );
}

export default TaskList;
