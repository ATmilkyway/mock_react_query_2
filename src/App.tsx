import { useReducer } from "react";
import "./App.css";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";
import Counter from "./state-management/Counter";
import LoginStatus from "./state-management/LoginStatus";
import TaskList from "./state-management/TaskList";
import taskReducer from "./state-management/reducers/taskReducer";
import TaskContext from "./state-management/contexts/taskContext";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import authReducer from "./state-management/reducers/authReducer";
import AuthContext from "./state-management/contexts/authContext";

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [user, authDispatch] = useReducer(authReducer, "");

  return (
    <>
      {/* <TodoForm />
      <TodoList /> */}
      {/* <Counter /> */}
      {/* <TaskList /> */}

      <AuthContext.Provider value={{ user, dispatch:authDispatch }}>
        <TaskContext.Provider value={{ tasks, dispatch }}>
          <NavBar />
          <HomePage />
        </TaskContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
