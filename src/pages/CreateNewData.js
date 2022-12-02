import { Link } from "react-router-dom";
import WebCam from "../components/part/WebCam";
import DiaryInputSet from "../components/DiaryInputSet";
import { useEffect, useMemo, useState } from "react";

const CreateNewData = () => {
  const [img, setImg] = useState(null);
  const [location, setLocation] = useState({ lat: null, lon: null });

  useEffect(() => {
    const onSuccess = (result) => {
      const { coords, timestamp } = result;
      setLocation({ lat: coords.latitude, lon: coords.longitude });
    };
    const onError = (err) => {
      console.log(err);
    };
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  });

  return (
    <div>
      <Link to="/">Go to Home</Link>
      <h1>Create New Data</h1>
      {img ? (
        <DiaryInputSet img={img} location={location} />
      ) : (
        <WebCam setImg={setImg} />
      )}
    </div>
  );
};

export default CreateNewData;
