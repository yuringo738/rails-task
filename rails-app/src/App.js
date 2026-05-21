import React, { useState, useEffect, useCallback } from "react";
import { Box, Center, Text } from "@chakra-ui/react";
import axios from "axios";
import { fetchTasks, createTask, toggleTaskStatus } from "./api/taskApi";
import TaskForm from "./component/TaskForm";
import TaskList from "./component/TaskList";
import { addOneDay } from "./utils/dateUtils";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState(addOneDay(new Date()));
  const [showCompleted, setShowCompleted] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc");

  const sortTasks = useCallback((tasks) => {
    const sortedTasks = [...tasks].sort((a, b) => {
      if (sortOrder === "asc") {
        return new Date(a.due_date) - new Date(b.due_date);
      } else {
        return new Date(b.due_date) - new Date(a.due_date);
      }
    });
    setTasks(sortedTasks);
  }, [sortOrder]);

  const fetch = useCallback(async () => {
    const tasks = await fetchTasks();
    sortTasks(tasks);
  }, [sortTasks]);

  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
    sortTasks(tasks);
  };

  const createTaskHandler = async () => {
    if (taskName.trim() === '') return;
    await createTask(taskName, dueDate);
    setTaskName("");
    fetch();
  };

  const destroyTask = async (id) => {
    await axios.delete(`http://localhost:3010/tasks/${id}`);
    fetch();
  };

  useEffect(() => {
    fetch();
  }, [fetch]);

  const toggleIsDone = async (id, index) => {
    const isDone = tasks[index].is_done;
    await toggleTaskStatus(id, isDone);
    fetch();
  };

  return (
    <Box mt="64px" width="100%">
      <Center>
        <Box mt="64px" width="100%">
          <Center>
            <Box width="60%">
              <Box mb="24px">
                <Text fontSize="24px" fontWeight="bold">
                  タスク一覧
                </Text>
              </Box>
              <TaskForm
                taskName={taskName}
                setTaskName={setTaskName}
                dueDate={dueDate}
                setDueDate={setDueDate}
                createTask={createTaskHandler}
              />
              <TaskList
                tasks={tasks}
                showCompleted={showCompleted}
                toggleIsDone={toggleIsDone}
                destroyTask={destroyTask}
                toggleSortOrder={toggleSortOrder}
                sortOrder={sortOrder}
                setShowCompleted={setShowCompleted}
                fetch={fetch}
              />
            </Box>
          </Center>
        </Box>
      </Center>
    </Box>
  );
};

export default App;