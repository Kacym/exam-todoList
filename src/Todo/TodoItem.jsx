import { useDispatch } from "react-redux";
import { deleteData, getData, updateData } from "../redux/todoReducer";
import { styled } from "styled-components";

export const TodoItem = ({ task }) => {
  const dispatch = useDispatch();

  const deleteTodoHandler = async (id) => {
    await dispatch(deleteData(id));
    await dispatch(getData());
  };

  const updateTodoHandler = async (data) => {
    await dispatch(updateData(data));
    await dispatch(getData());
  };

  return (
    <StyledTodoItem>
      <StyledTitleAndCheckbox>
        <StyledCheckbox
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => updateTodoHandler(task)}
        />
        <p
          style={{
            textDecoration: task.isCompleted ? "line-through" : "none",
            color: task.isCompleted ? "gray" : "white",
          }}
        >
          {task.title}
        </p>
      </StyledTitleAndCheckbox>

      <DeleteButton onClick={() => deleteTodoHandler(task._id)}>
        delete
      </DeleteButton>
    </StyledTodoItem>
  );
};

const StyledTodoItem = styled.li({
  display: "flex",
  fontSize: "18px",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "20px",
});

const DeleteButton = styled.button({
  backgroundColor: "red",
  fontSize: "18px",
  border: "none",
  padding: "15px 25px",
  cursor: "pointer",
  color: "white",
});

const StyledTitleAndCheckbox = styled.div({
  display: "flex",
  marginRight: "20px",
  gap: "10px",
  alignItems: "center",
});

const StyledCheckbox = styled.input({
  transform: "scale(1.5)",
  marginTop: "5px",
});
