import React from "react";
import TodoList from "./components/TodoList";
import TodoInsert from "./components/TodoInsert";
// import Counter from "./components/Counter";

function App() {
  return (
    <>
      <TodoInsert />
      <TodoList />
    </>
  );
}

export default App;
