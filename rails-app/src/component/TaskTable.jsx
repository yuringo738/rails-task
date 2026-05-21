import React from "react";
import { Flex, Table} from "@chakra-ui/react";
import Task from "./Task";


const TaskTable = ({ tasks, showCompleted, toggleIsDone, destroyTask, fetch}) => {
    
    return(
        <Table.Root variant="simple">
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeader whiteSpace="nowrap"><Flex justifyContent="center">完了</Flex></Table.ColumnHeader>
                    <Table.ColumnHeader width="50%">タイトル</Table.ColumnHeader>
                    <Table.ColumnHeader width="20%">追加日</Table.ColumnHeader>
                    <Table.ColumnHeader width="20%">期日</Table.ColumnHeader>
                    <Table.ColumnHeader whiteSpace="nowrap"><Flex justifyContent="center">操作</Flex></Table.ColumnHeader>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                
                    {tasks.map((task, index) => {
                        if(!showCompleted && task.is_done){
                            return null;
                        }
                        return(
                        <Task
                           id={task.id}
                           key={index}
                           index={index}
                           name={task.name}
                           isDone={task.is_done}
                           toggleIsDone={toggleIsDone}
                           destroyTask={destroyTask}
                           createdAt={new Date(task.created_at).toLocaleDateString()}
                           dueDate={task.due_date}
                           memo={task.memo}
                           fetch={fetch}
                        />
                        );
                    })}
             
            </Table.Body>
        </Table.Root>
    );
};

export default TaskTable;