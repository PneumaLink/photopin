import { Link } from "react-router-dom";
import WebCam from "../components/part/WebCam";
import DiaryInputSet from "../components/DiaryInputSet";
import { useState } from "react";

const CreateNewData = () => {
  const [img, setImg] = useState(null);

  return (
    <div>
      <Link to="/">Go to Home</Link>
      <h1>Create New Data</h1>
      <WebCam setImg={setImg} />
      <DiaryInputSet img={img} />
    </div>
  );
};

export default CreateNewData;
