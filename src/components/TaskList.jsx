import Task from "./Task";

const TaskList = ({ tasks, deleteTask, doneTask }) => {
  return (
    <div>
      {tasks?.length > 0 ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            deleteTask={deleteTask}
            doneTask={doneTask}
          />
        ))
      ) : (
        <h3>No hay tareas</h3>
      )}
    </div>
  );
};

export default TaskList;
