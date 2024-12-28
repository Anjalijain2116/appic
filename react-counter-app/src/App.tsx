import React from "react";
import Counter from "./components/Counter.tsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Welcome to My Counter App</h1>
        <Counter />
      </div>
    </div>
  );
}

export default App;
