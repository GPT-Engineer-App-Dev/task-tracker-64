import React from 'react';
import { Box, Text, Checkbox, IconButton, HStack } from '@chakra-ui/react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const TodoItem = ({ todo, onEdit, onDelete, onToggleComplete }) => {
  return (
    <Box p={4} borderWidth={1} borderRadius="md" bg={todo.is_complete ? 'green.100' : 'red.100'}>
      <HStack justify="space-between">
        <Checkbox isChecked={todo.is_complete} onChange={() => onToggleComplete(todo.id, todo.is_complete)}>
          <Text as={todo.is_complete ? 's' : ''}>{todo.task}</Text>
        </Checkbox>
        <HStack spacing={2}>
          <IconButton icon={<FaEdit />} onClick={() => onEdit(todo)} />
          <IconButton icon={<FaTrash />} onClick={() => onDelete(todo.id)} />
        </HStack>
      </HStack>
    </Box>
  );
};

export default TodoItem;