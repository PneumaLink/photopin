import { useContext, useEffect } from "react";

import { DispatchDiaryData } from "../App";
import Webcam from "react-webcam";
import Button from "./Button";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const CamViewer = () => {
  const setImgData = useContext(DispatchDiaryData).setImgData;

  return (
    <div>
      <Webcam
        className="webcam"
        audio={false}
        width={640}
        height={360}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      >
        {({ getScreenshot }) => (
          <Button
            text={"Shot"}
            onClick={() => {
              console.log("Shot!");
              setImgData(getScreenshot());
            }}
          />
        )}
      </Webcam>
    </div>
  );
};

export default CamViewer;
