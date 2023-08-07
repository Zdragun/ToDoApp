import React, { useState } from 'react';
import '../scss/UpdateTask.scss'
import { createTask } from '../utility/api';
import {useNavigate} from 'react-router-dom';
import {MdOutlineCreateNewFolder} from 'react-icons/md'

const AddTask = () => {
  const navigate = useNavigate();
  const [task, setTask] = useState({
    taskname: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,[name]:value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask(task)
      .then((res) => {
        console.log('Task created:', res);
        navigate(-1);
      })
      .catch((error) => {
        console.log('Error creating task:', error);

      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="taskname">Title:</label><br />
        <input
         placeholder="Enter new task name"
          type="text"
          id="taskname"
          name="taskname"
          value={task.taskname}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label><br />
        <textarea
        placeholder="Enter new task description"
          id="description"
          name="description"
          value={task.description}
          onChange={handleChange}
        />
      </div>
      <button disabled={task.description.length === 0 || task.taskname.length >= 10 || task.taskname.length === 0 ? true : false} type="submit"><MdOutlineCreateNewFolder>Submit</MdOutlineCreateNewFolder></button>
    </form>
  );
};

export default AddTask;
