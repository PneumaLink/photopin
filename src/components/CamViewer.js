import { useContext, useEffect } from "react";

import { DispatchDiaryData } from "../App";
import Webcam from "react-webcam";
import Button from "./Button";
import GetLocate from "./api/GetLocate";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const CamViewer = () => {
  const setImgData = useContext(DispatchDiaryData).setImgData;
  const locationData = GetLocate();

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
      <>
        {locationData.loaded
          ? JSON.stringify(locationData)
          : "Location data not available yet."}
      </>
    </div>
  );
};

export default CamViewer;
