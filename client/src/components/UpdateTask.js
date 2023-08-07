import React, { useEffect, useState } from 'react';
import { getSingleTask, updateTask } from '../utility/api';
import { useNavigate, useParams } from 'react-router-dom';
import '../scss/UpdateTask.scss';
import {MdOutlineUpdate} from 'react-icons/md';
const UpdateTask = () => {
    const navigate = useNavigate();
    const { updateId } = useParams();
    const [updatetask, setUpdateTask] = useState({
        taskname: '',
        description: '',
        isFinished: false,
    });

    useEffect(() => {
        getSingleTask(updateId).then((res) => {
            setUpdateTask({
                ...updatetask,
                taskname: res.taskname, 
                description: res.description,
                isFinished: res.isFinished,
            });
        })
    
      }, [])
    

    const handleChange = (e) => {
        setUpdateTask((prevUpdTask) => ({ ...prevUpdTask, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

    
        updateTask(updateId, updatetask)
            .then((res) => {
                console.log('Task updated:', res);
                navigate(-1);
            })
            .catch((error) => {
                console.log('Error updating task:', error);
            });
    };

  

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="taskname">Title:</label>
                <br />
                <input style={{opacity:0.7}}
                 
                    type="text"
                    id="taskname"
                    name="taskname"
                    value={updatetask.taskname}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <br />
                <textarea
                style={{opacity:0.7}}
                    type="text"
                    placeholder={updatetask.description}
                    id="description"
                    name="description"
                    value={updatetask.description}
                    onChange={handleChange}
                />
            </div>
            <div style={{display:'flex',border:'none',paddingRight:2}}>
                <label htmlFor="isFinished">Completed:</label>
                <input
                    type="checkbox"
                    id="isFinished"
                    name="isFinished"
                    checked={updatetask.isFinished}
                    onChange={(e) => setUpdateTask((prevUpdTask) => ({ ...prevUpdTask, [e.target.name]: e.target.checked }))}
                />
            </div>
            <button className='orange' disabled={updatetask.description.length === 0  || updatetask.taskname.length === 0 ? true : false} type="submit"><MdOutlineUpdate >Submit</MdOutlineUpdate></button>
        </form>
    );
};

export default UpdateTask;
