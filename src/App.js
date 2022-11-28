import "./App.css";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routers/Home";
import GetLocal from "./components/api/GetLocate";

export const DiaryData = React.createContext();
export const DispatchDiaryData = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE": {
      return [action.data, ...state];
    }
  }
};

function App() {
  const [diaryData, dispatch] = useReducer(reducer, []);
  const [imgData, setImgData] = useState();
  const [localData, setLocalData] = useState({
    lat: null,
    lon: null,
  });

  const dataId = useRef(0);

  const onCreate = ({ img, tag, mainText, locate }) => {
    const dateTime = new Date();

    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        tag: tag,
        mainText: mainText,
        img: img,
        createTime: dateTime,
        editTime: dateTime,
        locate: locate,
      },
    });
    dataId.current += 1;
  };

  const onEdit = ({}) => {
    dispatch({
      type: "CERATE",
      data: {},
    });
  };

  const onRemove = ({}) => {
    dispatch({
      type: "CERATE",
      data: {},
    });
  };

  return (
    <DiaryData.Provider
      value={{ diaryData: diaryData, imgData: imgData, localData: localData }}
    >
      <DispatchDiaryData.Provider
        value={{
          onCreate: onCreate,
          onEdit: onEdit,
          onRemove: onRemove,
          setImgData: setImgData,
          setLocalData: setLocalData,
        }}
      >
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </DispatchDiaryData.Provider>
    </DiaryData.Provider>
  );
}

export default App;
