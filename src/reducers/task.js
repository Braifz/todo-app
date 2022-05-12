import { TASKS } from "../actions/task";
import ShortUniqueId from "short-unique-id";

const uid = new ShortUniqueId({ length: 10 });

export const initialState = {
  tasks: [
    {
      id: null,
      title: "",
      description: "",
      completed: false,
    },
  ],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASKS.SET_TASK:
      return {
        tasks: [
          ...state.tasks,
          {
            id: uid(),
            title: action.payload.title,
            description: action.payload.description,
            completed: false,
          },
        ],
      };
    case TASKS.DELETE_TASK: {
      const newTasks = state.tasks.filter(
        (task) => task.id !== action.payload.id
      );
      return {
        tasks: [...state.tasks, newTasks],
      };
    }
    default:
      return state;
  }
};
