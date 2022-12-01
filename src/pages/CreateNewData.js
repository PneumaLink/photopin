import { Link } from "react-router-dom";
import WebCam from "../components/part/WebCam";
import DiaryInputSet from "../components/DiaryInputSet";

const CreateNewData = () => {
  return (
    <div>
      <Link to="/">Go to Home</Link>
      <h1>Create New Data</h1>
      <WebCam />
      <DiaryInputSet />
    </div>
  );
};

export default CreateNewData;
