import React from "react";
import TodoList from "./components/TodoList";
import TodoInsert from "./components/TodoInsert";

function App() {
  return (
    <>
      <TodoInsert />
      <TodoList />
    </>
  );
}

export default App;
