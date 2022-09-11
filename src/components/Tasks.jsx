import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, onDelete, toggleReminder }) => {
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Task Name</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>


        <tbody>
          <tr>
            <th>1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>


      </table>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            handleDelete = { onDelete }
            toggleReminder = { toggleReminder }
          />
        );
      })}
    </>
  );
};

export default Tasks;
