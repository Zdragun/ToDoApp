import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BsCreditCard2Front } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';
import { deleteTask } from '../utility/api';
import {FormatedData} from '../utility/FormatedData'
const ItemTask = ({ item }) => {
    const [deletedTasks, setDeletedTasks] = useState([]);


    const handleDeleteTask = (deleteId) => {
        console.log(deleteId);
        deleteTask(deleteId).then((res) => {
            console.log(res, 'Task delted successfully');
            setDeletedTasks(deletedTasks.filter((tasks) => tasks.id !== deleteId));
            window.location.reload();
        }).catch((error) => console.log(error))

    }

    return (
        <div className='container'>
            <div className='single-cont'>
                <Link to={`/singletask/${item._id}`}><h1 style={{ textDecoration: item.isFinished ? 'line-through' : 'none' }}>{item.taskname}</h1></Link>
                <div className="data-cont">
                    <p>{FormatedData(item.createdAt)}</p>
                    <div className='gred'><Link to={`/update-tasks/${item._id}`}><BsCreditCard2Front style={{ color: "#00FF00", marginRight: 5, }} size={20} /></Link>
                        <span><AiOutlineDelete onClick={() => handleDeleteTask(item._id)} style={{ color: "#FF0000", cursor: 'pointer' }} size={20} />
                        </span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ItemTask
