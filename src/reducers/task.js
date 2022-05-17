import { TASKS } from "../actions/task";

export const initialState = {
  tasks: [],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASKS.SET_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case TASKS.DONE_TASK: {
      return {
        ...state,
      };
    }
    case TASKS.DELETE_TASK: {
      const newTasks = state.tasks.filter((task) => task.id !== action.payload);
      console.log(action.payload);
      return {
        tasks: [...newTasks],
      };
    }
    default:
      return state;
  }
};
