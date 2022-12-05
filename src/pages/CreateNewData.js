import WebCam from "../components/part/WebCam";
import PinInput from "../components/PinInput";
import React, { useEffect, useState, useContext } from "react";
import { dayDataContext, DispatchFunctions } from "../App";
import { useNavigate } from "react-router-dom";

export const locationContext = React.createContext();

const CreateNewData = () => {
  const tagList = useContext(dayDataContext).tagList;
  const id = useContext(dayDataContext).dataId;
  const pinDispatch = useContext(DispatchFunctions).pinDispatch;
  const [img, setImg] = useState(null);
  const [location, setLocation] = useState({ state: "ready" });
  const [inputData, setInputData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const onSuccess = (result) => {
      const { coords } = result;
      setLocation({
        state: "success",
        locate: { lat: coords.latitude, lng: coords.longitude },
      });
    };
    const onError = (err) => {
      console.log({ state: "error", message: err });
    };
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  const onCreate = () => {
    const time = new Date();

    pinDispatch({
      type: "CREATE",
      data: {
        id: id.current,
        tag: inputData.tag,
        img,
        mainText: inputData.mainText,
        createTime: time,
        editTime: time,
        location,
      },
    });

    id.current += 1;
  };

  const setOnClick = () => {
    if (location) {
      onCreate();
      navigate("/");
    } else {
      alert("잠시만 기다려주세용!");
    }
  };

  return (
    <locationContext.Provider value={{ location }}>
      <div>
        <h1>Create New Data</h1>
        {!img ? (
          <WebCam setImg={setImg} />
        ) : (
          <PinInput
            img={img}
            tagList={tagList}
            setInputData={setInputData}
            setOnClick={setOnClick}
            defaultText={""}
          />
        )}
      </div>
    </locationContext.Provider>
  );
};

export default CreateNewData;
