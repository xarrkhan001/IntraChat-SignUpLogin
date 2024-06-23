import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUpLogin from "./components/SignUpLogin";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUpLogin />} />
      </Routes>
    </div>
  );
};

export default App;
