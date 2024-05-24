import React, { useState } from 'react';
import { VStack, Input, Button } from '@chakra-ui/react';
import { supabase } from '../supabaseClient';

const EditTodo = ({ todo, setEditingTodo, fetchTodos }) => {
  const [task, setTask] = useState(todo.task);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (task.trim() === '') return;

    await supabase.from('todos').update({ task }).eq('id', todo.id);
    setEditingTodo(null);
    fetchTodos();
  };

  return (
    <VStack as="form" onSubmit={handleSubmit} spacing={4}>
      <Input
        placeholder="Edit task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        bg="white"
      />
      <Button type="submit" colorScheme="orange">Update Task</Button>
      <Button onClick={() => setEditingTodo(null)} colorScheme="red">Cancel</Button>
    </VStack>
  );
};

export default EditTodo;