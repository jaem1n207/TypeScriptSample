import React from "react";

// import Counter from "./Counter";
// import Greetings from "./Greetings";
import MyFrom from "./MyForm";
// import ReducerSample from "./ReducerSample";

function App() {
  /* const onClick = (name: string) => {
    console.log(`${name} says hello`);
  }; */
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return <MyFrom onSubmit={onSubmit} />;
}

export default App;
