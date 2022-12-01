import Webcam from "react-webcam";
import Button from "./Button";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const WebCam = ({ setImg }) => {
  const getScreenshot = ({ getScreenshot }) => (
    <Button
      onClick={() => {
        setImg(getScreenshot());
      }}
      innerText={"!찰칵!"}
    />
  );

  return (
    <Webcam
      audio={false}
      height={720}
      screenshotFormat="image/jpeg"
      width={1280}
      videoConstraints={videoConstraints}
    >
      {getScreenshot}
    </Webcam>
  );
};

export default WebCam;
