import { useState } from "react";
import { Checkbox, Text, Flex, IconButton } from "@chakra-ui/react";
import { X, Pencil } from "lucide-react";
import TaskEditModal from "./TaskEditModal";

const Task = (props) => {
  const [isEditOpen, setIsEditOpen] = useState(false);

  const isOverdue = !props.isDone && new Date(props.dueDate) < new Date();

  const titleColor = props.isDone ? "gray" : isOverdue ? "red" : "inherit";
  const dueDateColor = props.isDone ? "gray" : isOverdue ? "red" : "gray";

  return (
    <tr>
      <td>
        <Flex justifyContent="center" alignItems="center">
          <Checkbox.Root
            checked={props.isDone}
            colorPalette="blue"
            size="sm"
            pr="3"
            onCheckedChange={() => {
              props.toggleIsDone(props.id, props.index);
            }}
          >
            <Checkbox.HiddenInput />
            <Checkbox.Control />
          </Checkbox.Root>
        </Flex>
      </td>
      <td>
        <Flex alignItems="center" justifyContent="space-between">
          <Text as={props.isDone ? "s" : "span"} color={titleColor}>
            {props.name}
          </Text>
          <IconButton
            size="sm"
            onClick={() => setIsEditOpen(true)}
            aria-label="Edit task"
            ml="4"
            variant="ghost"
            flexShrink={0}
          >
            <Pencil />
          </IconButton>
        </Flex>
        <TaskEditModal
          isOpen={isEditOpen}
          onClose={() => setIsEditOpen(false)}
          task={props}
          fetch={props.fetch}
        />
      </td>
      <td>
        <Text color="gray">{props.createdAt}</Text>
      </td>
      <td>
        <Text as={props.isDone ? "s" : "span"} color={dueDateColor}>
          {new Date(props.dueDate).toLocaleDateString()}
        </Text>
      </td>
      <td>
        <Flex justifyContent="center" alignItems="center">
          <IconButton
            size="sm"
            onClick={() => props.destroyTask(props.id)}
            aria-label="Delete task"
            variant="ghost"
            _hover={{ bg: "gray.200", color: "gray.700" }}
          >
            <X />
            {/* ばつ印のアイコンをlucide-reactから読み込んでいる */}
          </IconButton>
        </Flex>
      </td>
    </tr>
  );
};

export default Task;
