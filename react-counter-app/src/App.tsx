import React from "react";
import Counter from "./components/Counter.tsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Welcome to My Counter App</h1>
        {/* Array.map((, index) => <Counter id={index}/>) */}
        <Counter index='1' />
        <Counter index='2' />
        <Counter index='3' />
      </div>
    </div>
  );
}

export default App;
