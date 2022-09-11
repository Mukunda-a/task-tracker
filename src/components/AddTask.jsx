import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState({
    text: "",
    day: ""
  });

  const [reminder, setReminder] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => {
      return {
        ...prevTask,
        [name]: value
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.text) {
      alert("Please add a task");
    }

    addTask({
      text: task.text,
      day: task.day,
      reminder: reminder
    });

    setTask({
      text: "",
      day: ""
    });

    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          name="text"
          type="text"
          placeholder="Add Task"
          value={task.text}
          onChange={handleChange}
        />
      </div>
      <div className="form-control">
        <label>Start Date</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          name="day"
          value={task.day}
          onChange={handleChange}
        />
      </div>
      <div className="form-control">
        <label>End Date</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          name="day"
          value={task.day}
          onChange={handleChange}
        />
      </div>
      <div className="form-control">
        <label>Status</label>
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          name="reminder"
          onChange={(e) => setReminder(e.currentTarget.checked)}
          checked={reminder}
        />
      </div>


      <input type="submit" value="Save Task" className="btn btn-block btn-dark " />
    </form>
  );
};

export default AddTask;
