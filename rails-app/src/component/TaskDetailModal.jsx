import React from "react";
import { 
  Dialog,
   DialogBackdrop,
    DialogContent,
     DialogHeader,
      DialogCloseTrigger,
       DialogBody,
        DialogFooter,
         Button,
          Text,
          DialogPositioner,
          DialogTitle
         } from "@chakra-ui/react";

const TaskDetailModal = ({ isOpen, onClose, task }) => {
  return (
    <Dialog.Root isOpen={isOpen} onOpenChange={(e) => !e.open && onClose()}>
      <DialogBackdrop />
      <DialogPositioner>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>タスク詳細</DialogTitle>
          </DialogHeader>
        <DialogCloseTrigger />
        <DialogBody>
          <Text>タスク名: {task?.name}</Text>
          <Text>追加日: {task?.createdAt}</Text>
          <Text>期日: {task?.dueDate}</Text>
          <Text>メモ: {task?.memo}</Text>
        </DialogBody>
        <DialogFooter>
          <Button colorPalette="blue" mr={3} onClick={onClose}>
            閉じる
          </Button>
        </DialogFooter>
      </DialogContent>
      </DialogPositioner>
    </Dialog.Root>
  );
};

export default TaskDetailModal;