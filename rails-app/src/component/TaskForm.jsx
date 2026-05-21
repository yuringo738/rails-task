import React from "react";
import { Box, Flex, Input, Button } from "@chakra-ui/react";

const TaskForm = ({ taskName = '', setTaskName, dueDate = '', setDueDate, createTask }) => {
  const isEmpty = taskName.trim() === '';

  return (
    <Flex mb="24px">
      <Input
        width="100%"
        placeholder="タスク名を入力"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <Input
        width="30%"
        ml="16px"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <Box ml="16px">
        <Button
          bg="oklch(60% 0.118 184.704)"
          color="white"
          _hover={{ bg: 'oklch(55% 0.118 184.704)' }}
          _disabled={{ opacity: 0.4, cursor: 'not-allowed' }}
          onClick={createTask}
          disabled={isEmpty}
        >
          タスクを作成
        </Button>
      </Box>
    </Flex>
  );
};

export default TaskForm;
