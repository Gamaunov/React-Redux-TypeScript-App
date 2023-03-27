import React, { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { setTodoPage } from "../store/action-creators/todo";

const TodoList: React.FC = () => {
  const { page, error, loading, todos, limit } = useTypedSelector(
    (state) => state.todo
  );
  const pages = [1, 2, 3, 4, 5];
  const { fetchTodos, setTodoPage } = useActions();

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return <h1 className="text-xl ">Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="py-4 font-montserrat">
      <h2 className="text-xl underline mb-4">User List</h2>
      {todos.map((todo) => (
        <div className="mb-3" key={todo.id}>
          <span className="font-semibold">{todo.id}</span> - {todo.title}
        </div>
      ))}
      <div className="flex gap-1">
        {pages.map((p) => (
          <div
            className="cursor-pointer rounded bg-slate-800 px-2 py-1 text-white hover:bg-slate-600"
            key={p.toString()}
            onClick={() => setTodoPage(p)}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
