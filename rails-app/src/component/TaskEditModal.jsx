import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogContent,
  DialogHeader,
  DialogCloseTrigger,
  DialogBody,
  DialogFooter,
  Button,
  Input,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { format } from "date-fns";

const TaskEditModal = ({ isOpen, onClose, task, fetch }) => {
  const [name, setName] = useState(task.name || "");
  const [dueDate, setDueDate] = useState("");
  const [memo, setMemo] = useState(task.memo || "");

  useEffect(() => {
    if (task) {
      setName(task.name || "");
      setDueDate(task.dueDate ? format(new Date(task.dueDate), "yyyy-MM-dd") : "");
      setMemo(task.memo || "");
    }
  }, [task]);

  const handleSave = async () => {
    await axios.put(`http://localhost:3010/tasks/${task.id}`, {
      name,
      due_date: dueDate,
      memo,
    });
    fetch();
    onClose();
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(e) => !e.open && onClose()}>
      <DialogBackdrop />
      <Dialog.Positioner>
        <DialogContent>
          <DialogHeader>タスク編集</DialogHeader>
          <DialogCloseTrigger />
          <DialogBody>
            <Input
              placeholder="タスク名"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="date"
              value={dueDate}                            
              onChange={(e) => setDueDate(e.target.value)}
              mt={4}
            />
            <Textarea
              placeholder="メモ"
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
              mt={4}
            />
          </DialogBody>
          <DialogFooter>
            <Button colorPalette="blue" mr={3} onClick={handleSave}>
              保存
            </Button>
            <Button onClick={onClose}>キャンセル</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};

export default TaskEditModal;