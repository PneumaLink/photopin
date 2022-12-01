import "./style/App.css";
import Home from "./pages/Home";
import CreateNewData from "./pages/CreateNewData";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useReducer, useRef, useEffect } from "react";
import pinReducer from "./functions/pinReducer";
import dayReducer from "./functions/dayReducer";
import Detail from "./pages/Deatil";

export const dayDataContext = React.createContext();
export const DispatchFunctions = React.createContext();

function App() {
  const [pinList, pinDispatch] = useReducer(pinReducer, []);
  const [dayList, dayDispatch] = useReducer(dayReducer, []);

  const dataId = useRef(0);

  const onInit = () => {
    pinDispatch({ type: "INIT" });
  };

  const onCreate = ({ tag, img, mainText, location }) => {
    const time = new Date();

    pinDispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        tag: tag,
        img: img,
        mainText: mainText,
        createTime: time,
        editTime: time,
        location: location,
      },
    });
    dataId.current += 1;
  };

  const onEdit = ({ tag, img, mainText }) => {
    const time = new Date();

    pinDispatch({
      type: "CREATE",
      data: {
        tag: tag,
        img: img,
        mainText: mainText,
        editTime: time,
      },
    });
  };

  const onRemove = ({ targetId }) => {
    pinDispatch({ type: "REMOVE", targetId: targetId });
  };

  return (
    <DispatchFunctions.Provider value={{ onCreate, onEdit, onEdit, onInit }}>
      <dayDataContext.Provider value={{ pinList }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/createNewData" element={<CreateNewData />}></Route>
            <Route path="/detail/:id" element={<Detail />}></Route>
          </Routes>
        </BrowserRouter>
      </dayDataContext.Provider>
    </DispatchFunctions.Provider>
  );
}

export default App;
