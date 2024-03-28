import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";
import { styled } from "styled-components";

export const TodoList = () => {
  const { data } = useSelector((state) => state.todoReducer);
  return (
    <StyledList>
      {data.map((task) => (
        <TodoItem task={task} key={task._id} />
      ))}
    </StyledList>
  );
};

const StyledList = styled.ul({
  listStyle: "none",
});


