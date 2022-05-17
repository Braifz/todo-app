import { useReducer, useState } from "react";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import ShortUniqueId from "short-unique-id";

import { TASKS } from "../actions/task";
import "../styles/field.css";
import { initialState, taskReducer } from "../reducers/task";
import TaskList from "./TaskList";

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  min-height: 80vh;
  background-color: #fff;
  height: auto;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  padding: 16px;
  border-radius: 10px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  padding: 16px;
  align-items: center;
  margin-bottom: 16px;
  background-color: #222;
  color: white;
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
  const [task, setTask] = useState({ title: "", description: "" });
  const uid = new ShortUniqueId({ length: 10 });

  const handleTaskTitle = (e) => {
    setTask({ ...task, title: e.target.value });
  };

  const handleTaskDescription = (e) => {
    setTask({ ...task, description: e.target.value });
  };

  const doneTask = (id) => {
    dispatch({ type: TASKS.DONE_TASK, payload: id });
  };

  const deleteTask = (id) => {
    dispatch({ type: TASKS.DELETE_TASK, payload: id });
  };

  const addTask = () => {
    dispatch({
      type: TASKS.SET_TASK,
      payload: {
        id: uid(),
        title: task.title,
        description: task.description,
        completed: false,
      },
    });
    setTask({ title: "", description: "" });
  };

  console.log(state);
  return (
    <Container>
      <FormWrapper>
        <h1>Add Task</h1>
        <Formik initialValues={task} onSubmit={addTask}>
          <Form>
            <Field
              className="field"
              type="text"
              value={task.title}
              placeholder="New task"
              name="title"
              onChange={handleTaskTitle}
            />
            <Field
              className="field"
              value={task.description}
              type="textarea"
              placeholder="Add description"
              name="description"
              onChange={handleTaskDescription}
            />
            <div className="button-wrap">
              <Button disabled={task.title === ""} type="submit">
                Add
              </Button>
            </div>
          </Form>
        </Formik>
      </FormWrapper>
      <div>
        <TaskList
          tasks={state.tasks}
          doneTask={doneTask}
          deleteTask={deleteTask}
        />
      </div>
    </Container>
  );
};

export default TodoApp;
