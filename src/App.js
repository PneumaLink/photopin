import "./public/style/App.css";
import Home from "./pages/Home";
import CreateNewData from "./pages/CreateNewData";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useReducer, useRef, useState } from "react";
import Detail from "./pages/Deatil";
import Layout from "./components/Layout";
import { getDummyData } from "./functions/tools";
import pinReducer from "./functions/pinReducer";

export const dayDataContext = React.createContext();
export const DispatchFunctions = React.createContext();

const defaultTagList = ["일상", "운동", "특별", "중요"];

function App() {
  const [pinList, pinDispatch] = useReducer(pinReducer, getDummyData(100));
  const [tagList, setTagList] = useState(defaultTagList);

  const dataId = useRef(0);

  return (
    <DispatchFunctions.Provider value={{ setTagList, pinDispatch }}>
      <dayDataContext.Provider value={{ pinList, tagList, dataId }}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/createNewData" element={<CreateNewData />}></Route>
              <Route path="/detail/:id" element={<Detail />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </dayDataContext.Provider>
    </DispatchFunctions.Provider>
  );
}

export default App;
