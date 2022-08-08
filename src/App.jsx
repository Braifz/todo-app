import TodoApp from "./components/TodoApp";
import Layout from "./components/Layout";
import { getTasks } from "./services/taskService";

function App() {
  return (
    <div>
      <Layout>
        <TodoApp />
        <button onClick={getTasks}> click</button>
      </Layout>
    </div>
  );
}

export default App;
