import axios from "axios";
import { baseUrl } from "./api";

const endpoint = `${baseUrl}/tasks`;

export const getTasks = async () => {
  try {
    const response = await fetch(`${endpoint}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const postTask = async () => {};
export const updateTask = async () => {};
export const deleteTask = async () => {};
