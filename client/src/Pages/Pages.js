import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Navbar from '../components/Navbar';
import MainLayout from '../components/MainLayout';
import ItemTask from '../components/SingleTask';
import AddTask from '../components/AddTask';
import UpdateTask from '../components/UpdateTask';

const Pages = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<MainLayout />} />
                    <Route path='/singletask/:taskId' element={<ItemTask />} />
                    <Route path='/create-task' element={<AddTask />} />
                    <Route path='/update-tasks/:updateId' element={<UpdateTask/>} />
                </Routes>
            </Router>
        </>
    )
}

export default Pages