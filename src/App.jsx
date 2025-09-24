import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Task1 from "./pages/Task1";
import Task2 from "./pages/Task2";
import Task3 from "./pages/Task3";
import Task4 from "./pages/Task4";
import Task5 from "./pages/Task5";
import Task6 from "./pages/Task6";
import Task7 from "./pages/Task7";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index element={<Task1 />}></Route>
          <Route path="/task-2" element={<Task2 />}></Route>
          <Route path="/task-3" element={<Task3 />}></Route>
          <Route path="/task-4" element={<Task4 />}></Route>
          <Route path="/task-5" element={<Task5 />}></Route>
          <Route path="/task-6" element={<Task6 />}></Route>
          <Route path="/task-7" element={<Task7 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
