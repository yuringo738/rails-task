import axios from "axios";

const API_URL = "http://localhost:3010";

export const fetchTasks = async () => {
  const response = await axios.get(`${API_URL}/tasks`);
  return response.data;
};

export const createTask = async (name, dueDate) => {
  const response = await axios.post(`${API_URL}/tasks`, {
    name,
    due_date: dueDate,
  });
  return response.data;
};

export const toggleTaskStatus = async (id, isDone) => {
  const response = await axios.put(`${API_URL}/tasks/${id}`, {
    is_done: !isDone,
  });
  return response.data;
};