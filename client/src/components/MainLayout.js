import React, { Fragment, useEffect, useState } from 'react'
import '../scss/MainLayout.scss';
import { Link } from 'react-router-dom';
import { getAllTasks, getTasksCount, removeTasksFully } from '../utility/api';
import ItemTask from './ItemTask';
import { BsClipboardPlusFill } from 'react-icons/bs'

const MainLayout = () => {
  const [tasks, setTasks] = useState([])
  const [count, setCount] = useState(0);

  useEffect(() => {
    getAllTasks().then((res) => {
      setTasks(res);
    });
    getTasksCount().then((res) => {
      setCount(res);
    }).catch((error) => console.log(error));

  }, [])




  const handleRemoveAll = () => {
    removeTasksFully().then((res) => {
      console.log(res, 'Tasks removed!!!');
      window.location.reload();
    }).catch((error) => console.log(error))

  }

  return (
    <main className='main-cont'>
      <div className='btn-con'>
        <Link to={"/create-task"}><BsClipboardPlusFill style={{ color: "#FFF" }} size={20} /><span> . . .</span></Link>
      </div>
      {
        tasks.map((item) => (
          <Fragment key={item._id}>
            <ItemTask item={item} />
          </Fragment>
        ))
      }
      <div className='count-con'>
        <button onClick={handleRemoveAll} className='remove-all'>Remove all Docs</button>
        <p><span>{count}</span> tasks left</p>

      </div>
    </main>
  )
}

export default MainLayout