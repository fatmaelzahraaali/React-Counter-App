import React from "react";
import Navbar from "./Components/navbar";
import Counter from "./Components/counter";
import "bootstrap/dist/css/bootstrap.min.css";

// App Component
const App = () => {
  return (
    <div>
      <Navbar />
      <Counter />
    </div>
  );
};

export default App;