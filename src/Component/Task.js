import React from "react";

function Task({ task, handleChange }) {
  const completedStyle = {
    textDecoration: "line-through",
    color: "blue",
  };
  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => handleChange(task.id)}
      />
      <p style={task.completed ? completedStyle : null}>{task.text}</p>
    </div>
  );
}

export default Task;
