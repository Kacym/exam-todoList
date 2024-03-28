import { useEffect } from "react";
import { getData } from "../redux/todoReducer";
import { TodoForm } from "./TodoForm";
import { useDispatch } from "react-redux";
import { TodoList } from "./TodoList";
import { styled } from "styled-components";

export const TodoMain = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <StyledTodoMain>
      <TodoForm />
      <TodoList />
    </StyledTodoMain>
  );
};

const StyledTodoMain = styled.div({
  color: "white",
  backgroundColor: "blue",
  borderRadius: "4px",
  padding: "10px 30px 30px 10px",
});
