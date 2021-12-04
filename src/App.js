import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import React, { useState } from "react";
import { nanoid } from "nanoid";


function App(props) {
  let [tasks, setTasks] = useState(props.tasks);
  let taskList = props.tasks
  if(taskList) {
    taskList= props.tasks.map((task) => <Todo id={task.id} name={task.name} completed={task.completed} key={task.id} />
    );
  }
  function addTask(name) {
    let newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }
  let tasksNoun = taskList.length;
 if (tasksNoun !== 1) {? 'tasks' : 'task';
  const headingText = `${taskList.length}  ${tasksNoun} remaining`;
  
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
      <FilterButton />
      <FilterButton />
      <FilterButton />
      </div>
      <h2 id="list-heading">
        {headingText}
      </h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
       {taskList}
      </ul>
    </div>
  );
}

export default App;
