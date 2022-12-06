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
  const [userImg, setUserImg] = useState(null);
  const [location, setLocation] = useState({ state: "ready" });
  const [inputData, setInputData] = useState(null);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    if (location.state === "success" && inputData) {
      const time = new Date();

      pinDispatch({
        type: "CREATE",
        data: {
          id: id.current,
          tag: inputData.tag,
          img: userImg,
          mainText: inputData.mainText,
          createTime: time,
          editTime: time,
          location,
        },
      });

      id.current += 1;
      navigate("/");
    } else if (location.state === "ready" && inputData) {
      setLoading(true);
    }
  }, [inputData, location]);

  return (
    <locationContext.Provider value={{ location }}>
      <div>
        <h1>Create New Data</h1>
        {loading ? (
          <img src={require("../public/images/pin.gif")} />
        ) : !userImg ? (
          <WebCam setImg={setUserImg} />
        ) : (
          <PinInput
            img={userImg}
            tagList={tagList}
            setInputData={setInputData}
            defaultText={""}
          />
        )}
      </div>
    </locationContext.Provider>
  );
};

export default CreateNewData;
