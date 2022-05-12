import { useReducer } from "react";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import "../styles/field.css";

import Task from "./Task";
import { initialState, taskReducer } from "../reducers/task";

const Container = styled.div`
  width: 90%;
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
  border-radius: 10px;
  padding: 10px;
  align-items: center;
  background-color: #222;
  color: white;
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
  background-color: #fff;
  font-size: 1rem;
  color: black;
  border: none;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
  &:hover {
    background-color: #222;
    color: white;
    border: 2px solid white;
  }
`;

const TodoApp = () => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const addTask = (e) => {
    dispatch({ type: "SET_TASK", payload: e });
    console.log(state);
  };

  const doneTask = (id) => {
    dispatch({ type: "DONE_TASK", payload: id });
  };
  const deleteTask = (id) => {
    console.log(id);
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  return (
    <Container>
      <FormWrapper>
        <h1>Add Task</h1>
        <Formik
          initialValues={{ title: "", description: "" }}
          onSubmit={addTask}
        >
          <Form>
            <Field
              className="field"
              type="text"
              placeholder="New task"
              name="title"
            />
            <Field
              className="field"
              type="textarea"
              placeholder="Add description"
              name="description"
            />
            <div className="button-wrap">
              <Button type="submit">Add</Button>
            </div>
          </Form>
        </Formik>
      </FormWrapper>
      <div>
        {state.tasks?.length > 0 ? (
          state.tasks.map((task) => (
            <Task task={task} key={task.id} deleteTask={deleteTask} />
          ))
        ) : (
          <h3>No hay tareas</h3>
        )}
      </div>
    </Container>
  );
};

export default TodoApp;
