import React, { useState } from "react";

import Task from "./Task";

function TaskList() {
  const ToDO = [
    {
      id: 1,
      text: "Runing",
      completed: false,
    },
    {
      id: 2,
      text: "Reading",
      completed: false,
    },
    {
      id: 3,
      text: "Codding",
      completed: false,
    },

    {
      id: 4,
      text: "Workout",
      completed: false,
    },
  ];
  const [tasks, setTask] = useState(ToDO);

  const handleChange = (id) => {
    const _tasks = [...tasks];
    const index = _tasks.findIndex((e) => e.id === id);
    _tasks.splice(index, 1, { ..._tasks[index], completed: !tasks.completed });
    setTask(_tasks);
  };

  const tasklist = tasks.map((task) => (
    <Task key={task.id} task={task} handleChange={handleChange} />
  ));
  return <div>{tasklist}</div>;
}

export default TaskList;
