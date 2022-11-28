import "./style/App.css";
import Home from "./pages/Home";
import CreateNewData from "./pages/CreateNewData";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/createNewData" element={<CreateNewData />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
