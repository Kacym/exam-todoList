import { TodoMain } from "./Todo/TodoMain";
import { styled } from "styled-components";

function App() {
  return (
    <StyledTodoMainBox>
      <TodoMain />
    </StyledTodoMainBox>
  );
}

const StyledTodoMainBox = styled.div({
  display: "flex",
  justifyContent: "center",
});

export default App;
