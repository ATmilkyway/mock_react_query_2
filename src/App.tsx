import "./App.css";
import AuthProvider from "./state-management/auth/AuthProvider";
import Counter from "./state-management/counter/Counter";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import TaskProvider from "./state-management/tasks/TaskProvider";

function App() {
  return (
    <>
      {/* <TodoForm />
      <TodoList /> */}
      {/* <Counter /> */}
      {/* <TaskList /> */}

      <AuthProvider>
        <TaskProvider>
          <Counter />
          <NavBar />
          <HomePage />
        </TaskProvider>
      </AuthProvider>
    </>
  );
}

export default App;
