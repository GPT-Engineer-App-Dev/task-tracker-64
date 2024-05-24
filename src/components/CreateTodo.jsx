import React, { useState } from 'react';
import { VStack, Input, Button } from '@chakra-ui/react';
import { supabase } from '../supabaseClient';

const CreateTodo = ({ fetchTodos }) => {
  const [task, setTask] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (task.trim() === '') return;

    await supabase.from('todos').insert([{ task }]);
    setTask('');
    fetchTodos();
  };

  return (
    <VStack as="form" onSubmit={handleSubmit} spacing={4}>
      <Input
        placeholder="Enter a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        bg="white"
      />
      <Button type="submit" colorScheme="orange">Add Task</Button>
    </VStack>
  );
};

export default CreateTodo;