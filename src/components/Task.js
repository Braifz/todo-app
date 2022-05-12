import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: #eee;
  text-align: center;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgb(0, 0, 0, 0.5);
  margin: 10px 0;
`;

const WrapperTitle = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TextWrap = styled.div`
  width: 90%;
`;

const Button = styled.button`
  height: 30px;
  width: 50px;
  margin: 5px;
  font-size: 0.8rem;
  cursor: pointer;
  box-shadow: 1px 2px 2px rgb(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const ButtonDone = styled(Button)`
  border: 2px solid green;
  color: green;
  animation: 1s ease;
  &:hover {
    background-color: green;
    color: white;
  }
`;

const ButtonDelete = styled(Button)`
  border: 2px solid red;
  color: red;
  animation: 1s ease;
  &:hover {
    background-color: red;
    color: white;
  }
`;

const Task = ({ task, deleteTask }) => {
  const doneTask = () => {};

  return (
    <Container>
      <WrapperTitle>
        <h2> Title: {task.title}</h2>
        <div>
          <ButtonDone onClick={() => doneTask(task.id)}>done</ButtonDone>
          <ButtonDelete onClick={() => deleteTask(task.id)}>
            delete
          </ButtonDelete>
        </div>
      </WrapperTitle>
      <TextWrap>
        <p> Task: {task.description}</p>
      </TextWrap>
    </Container>
  );
};

export default Task;
