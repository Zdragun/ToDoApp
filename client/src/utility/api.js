import axios from 'axios';

const basic_url = "http://localhost:5000";

export const getAllTasks = async () => {
    try {
        const res = await axios.get(`${basic_url}/api/tasks/get-tasks`)
        return res.data;
    } catch (error) {
        console.log(error);
    }

}


export const createTask = async (newTask) => {
    try {
        const res = await axios.post(`${basic_url}/api/tasks/create-tasks`, newTask)
        return res.data;
    } catch (error) {
        console.log(error);
    }

}

export const deleteTask = async (id) => {
    try {
        const res = await axios.delete(`${basic_url}/api/tasks/delete-tasks/${id}`)
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error);
    }

}

export const updateTask = async (id, updatedTask) => {
    try {
        const res = await axios.put(`${basic_url}/api/tasks/update-tasks/${id}`, updatedTask)
        return res.data;
    } catch (error) {
        console.log(error);
    }

}
export const getSingleTask = async (id) => {
    try {
        const res = await axios.get(`${basic_url}/api/tasks/get-single-task/${id}`)
        return res.data;
    } catch (error) {
        console.log(error);
    }

}

export const removeTasksFully = async () => {
    try {
        const res = await axios.delete(`${basic_url}/api/tasks/remove-all-tasks`)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}
export const getTasksCount = async () => {
    try {
        const res = await axios.get(`${basic_url}/api/tasks/get-tasks-count`)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}


