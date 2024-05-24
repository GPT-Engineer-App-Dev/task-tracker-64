// Update this page (the content is just a fallback if you fail and example)
// Use chakra-ui
import { Container, VStack } from "@chakra-ui/react";
import TodoList from "../components/TodoList";

// Example of using react-icons
// import { FaRocket } from "react-icons/fa";
// <IconButton aria-label="Add" icon={<FaRocket />} size="lg" />; // IconButton would also have to be imported from chakra

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <TodoList />
      </VStack>
    </Container>
  );
};

export default Index;
