import { useState } from "react";
import { createData, getData } from "../redux/todoReducer";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";

export const TodoForm = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const createNewTodoHandler = async () => {
    if (inputValue.trim() !== "") {
      const newData = {
        title: inputValue,
        isCompleted: false,
      };
      await dispatch(createData(newData));
      await dispatch(getData());
    }
    return null;
  };
  return (
    <StyledTodoForm>
      <StyledInput
        type="text"
        placeholder="write your task"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <StyledAddButton onClick={createNewTodoHandler}>Add</StyledAddButton>
    </StyledTodoForm>
  );
};

const StyledTodoForm = styled.div({
  display: "flex",
  marginLeft: "2rem",
  justifyContent: "center",
  gap: "10px",
});

const StyledInput = styled.input({
  padding: "10px",
});

const StyledAddButton = styled.button({
  padding: "10px 20px",
});
