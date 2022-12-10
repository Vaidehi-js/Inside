import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Front from "./components/Front";
import Popup from "./components/Popup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Front />} path="Front" />
          <Route element={<Popup/>} path = 'Popup' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
