import { Link } from "react-router-dom";
import WebCam from "../components/WebCam";
import Input from "../components/Input";

const CreateNewData = () => {
  return (
    <div>
      <Link to="/">Go to Home</Link>
      <h1>Create New Data</h1>
      <WebCam />
      <Input />
    </div>
  );
};

export default CreateNewData;
