import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Sub from "./components/Sub";
import Second from "./result/Second";
import First from "./result/First";
import Third from "./result/Third";
import Four from "./result/Four";
import Five from "./result/Five";
import Six from "./result/Six";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="01" element={<First />} />
          <Route path="02" element={<Second />} />
          <Route path="03" element={<Third />} />
          <Route path="04" element={<Four />} />
          <Route path="05" element={<Five />} />
          <Route path="06" element={<Six />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
