import React from "react";
import TaskTable from "./TaskTable";
import { Button, Flex } from "@chakra-ui/react";

const TaskList = ({ tasks, showCompleted, toggleIsDone, destroyTask, toggleSortOrder, sortOrder, setShowCompleted, fetch }) => {
    return(
        <>
        <TaskTable
          tasks={tasks}
          showCompleted={showCompleted}
          toggleIsDone={toggleIsDone}
          destroyTask={destroyTask}
          fetch={fetch}
        />
        <Flex mt="24px" justifyContent="space-between">
            <Button
             style={{ backgroundColor: 'oklch(60% 0.118 184.704)'}}
              onClick={() => setShowCompleted(!showCompleted)}
            >
                {showCompleted ? "完了タスクを非表示":"完了タスクを表示"}
            </Button>
<Button
  ml="16px"
  mr="60px"
   style={{ backgroundColor: 'oklch(60% 0.118 184.704)'}}
  onClick={toggleSortOrder}>
    {sortOrder === "asc" ? "期日を降順に並び替え" : "期日を順に並び替え"}
</Button>
        </Flex>
        </>
    );
};

export default TaskList;