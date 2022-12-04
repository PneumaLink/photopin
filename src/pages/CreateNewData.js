import { Link } from "react-router-dom";
import WebCam from "../components/part/WebCam";
import DiaryInputSet from "../components/DiaryInputSet";
import React, { useEffect, useState } from "react";

export const locationContext = React.createContext();

const CreateNewData = () => {
  const [img, setImg] = useState(null);
  const [location, setLocation] = useState({ state: "ready" });

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

  return (
    <locationContext.Provider value={{ location }}>
      <div>
        <Link to="/">Go to Home</Link>
        <h1>Create New Data</h1>
        {img ? <DiaryInputSet img={img} /> : <WebCam setImg={setImg} />}
      </div>
    </locationContext.Provider>
  );
};

export default CreateNewData;
