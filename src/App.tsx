import React from "react";
import UerList from "../src/components/UserList";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div>
      <UerList />
      <hr />
      <TodoList />
    </div>
  );
};

export default App;
