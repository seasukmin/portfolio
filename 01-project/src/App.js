import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Sub from "./components/Sub";
import Second from "./result/Second";
import First from "./result/First";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="01" element={<First />} />
        <Route path="02" element={<Second />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
