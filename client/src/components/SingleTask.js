import React, { useState, useEffect } from 'react';
import { getSingleTask } from '../utility/api';
import { useParams } from 'react-router-dom';
import {FormatedData} from '../utility/FormatedData';
const SingleTask = () => {
  const { taskId } = useParams();
  const [singletask, setSingleTask] = useState({});
  useEffect(() => {
    getSingleTask(taskId).then((res) => {
      setSingleTask(res);
    });
  }, []);

  return (
    <div>
      <table
        style={{
          border: '1px solid #ccc',
          borderRadius: 5,
          background: '#222',
          color: 'white',
          fontSize: '16px',
          fontWeight: 100,

          borderCollapse: 'collapse',
        }}
      >
        <tbody>
          <tr>
            <th style={{ padding: '10px', borderBottom: '1px solid white',borderRight: '1px solid white' }}>Task Name</th>
            <td  style={{ padding: '10px', borderBottom: '1px solid white',borderRight: '1px solid white', textTransform:'capitalize'  }}>{singletask.taskname}</td>
          </tr>
          <tr>
            <th  style={{ padding: '10px', borderBottom: '1px solid white',borderRight: '1px solid white' }}>Description</th>
            <td  style={{ padding: '10px', borderBottom: '1px solid white',borderRight: '1px solid white' }}>{singletask.description}</td>
          </tr>
          <tr>
            <th  style={{ padding: '10px', borderBottom: '1px solid white',borderRight: '1px solid white'  }}>Created At</th>
            <td  style={{ padding: '10px', borderBottom: '1px solid white',borderRight: '1px solid white' }}>{FormatedData(singletask.createdAt)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SingleTask;
