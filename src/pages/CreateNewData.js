import { Link } from "react-router-dom";
import WebCam from "../components/part/WebCam";
import DiaryInputSet from "../components/DiaryInputSet";
import { useEffect, useState } from "react";

const CreateNewData = () => {
  const [img, setImg] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const onSuccess = (result) => {
      const { coords } = result;
      setLocation({ lat: coords.latitude, lng: coords.longitude });
    };
    const onError = (err) => {
      console.log(err);
    };
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  useEffect(() => {
    if (location) console.log(`location ${location.lat} : ${location.lng}`);
    else {
      console.log(location);
    }
  }, [location]);

  return (
    <div>
      <Link to="/">Go to Home</Link>
      <h1>Create New Data</h1>
      {img ? (
        location ? (
          <DiaryInputSet img={img} location={location} />
        ) : (
          <h1>위치정보 준비중...</h1>
        )
      ) : (
        <WebCam setImg={setImg} />
      )}
    </div>
  );
};

export default CreateNewData;
