import { useState } from "react";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import "../styles/field.css";
import ShortUniqueId from "short-unique-id";

import Task from "./Task";

const Container = styled.div`
  width: 80%;
  min-height: 80vh;
  background-color: #fff;
  height: auto;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  border: 1px solid grey;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 1px 2px 2px rgb(0, 0, 0, 0.4);
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputField = styled(Field)`
  width: 100%;
  height: 30px;
  margin: 5px;
  text-align: center;
  border-radius: 10px;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: #111;
  font-size: 1rem;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #333;
  }
`;

const TodoApp = () => {
  const [task, setTask] = useState([]);

  const uid = new ShortUniqueId();

  const addTask = (e) => {
    setTask([
      ...task,
      {
        id: uid(),
        task: e.task.trim(),
        text: e.text.trim(),
      },
    ]);
    console.log(task);
  };

  return (
    <Container>
      <FormWrapper>
        <h1>Add Task</h1>
        <Formik initialValues={{ task: "", text: "" }} onSubmit={addTask}>
          <Form>
            <Field
              className="field"
              type="text"
              placeholder="New task"
              name="task"
            />
            <Field
              className="field"
              type="textarea"
              placeholder="New text"
              name="text"
            />
            <div className="button-wrap">
              <Button type="submit">Add</Button>
            </div>
          </Form>
        </Formik>
      </FormWrapper>
      <div>
        {task.map((e) => (
          <Task props={e} />
        ))}
      </div>
    </Container>
  );
};

export default TodoApp;
