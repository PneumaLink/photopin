import CamViewer from "./CamViewer";
import Info from "./Info";
import { DiaryData } from "../App";
import { useContext } from "react";

const CreateData = () => {
  const data = useContext(DiaryData).imgData;

  return (
    <div>
      <h2>Create Data</h2>
      {data ? <Info /> : <CamViewer />}
    </div>
  );
};

export default CreateData;
