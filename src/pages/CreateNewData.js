import { Link } from "react-router-dom";
import WebCam from "../components/part/WebCam";
import DiaryInputSet from "../components/DiaryInputSet";
import { useEffect, useState } from "react";

const CreateNewData = () => {
  const [img, setImg] = useState(null);
  const [location, setLocation] = useState({ lat: null, lng: null });

  useEffect(() => {
    const onSuccess = (result) => {
      console.log("위치정보 가져오기 준비 완료!");
      const { coords } = result;
      setLocation({ lat: coords.latitude, lng: coords.longitude });
    };
    const onError = (err) => {
      console.log(err);
    };
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

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
