import React from "react";
import "./index.css";
import UerList from "../src/components/UserList";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className=" flex flex-col items-start  mx-3">
      <UerList />
      <TodoList />
    </div>
  );
};

export default App;
