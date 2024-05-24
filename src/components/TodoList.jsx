import React, { useState, useEffect } from 'react';
import { VStack, Box, Heading, Text, Checkbox, IconButton, HStack } from '@chakra-ui/react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { supabase } from '../supabaseClient';
import CreateTodo from './CreateTodo';
import EditTodo from './EditTodo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const { data } = await supabase.from('todos').select('*').order('created_at', { ascending: true });
    setTodos(data);
  };

  const handleDelete = async (id) => {
    await supabase.from('todos').delete().eq('id', id);
    fetchTodos();
  };

  const handleToggleComplete = async (id, isComplete) => {
    await supabase.from('todos').update({ is_complete: !isComplete }).eq('id', id);
    fetchTodos();
  };

  return (
    <VStack spacing={4} align="stretch">
      <Heading as="h1" size="xl" textAlign="center" color="orange.500">Todo List</Heading>
      <CreateTodo fetchTodos={fetchTodos} />
      {todos.map((todo) => (
        <Box key={todo.id} p={4} borderWidth={1} borderRadius="md" bg={todo.is_complete ? 'green.100' : 'red.100'}>
          <HStack justify="space-between">
            <Checkbox isChecked={todo.is_complete} onChange={() => handleToggleComplete(todo.id, todo.is_complete)}>
              <Text as={todo.is_complete ? 's' : ''}>{todo.task}</Text>
            </Checkbox>
            <HStack spacing={2}>
              <IconButton icon={<FaEdit />} onClick={() => setEditingTodo(todo)} />
              <IconButton icon={<FaTrash />} onClick={() => handleDelete(todo.id)} />
            </HStack>
          </HStack>
        </Box>
      ))}
      {editingTodo && <EditTodo todo={editingTodo} setEditingTodo={setEditingTodo} fetchTodos={fetchTodos} />}
    </VStack>
  );
};

export default TodoList;