import Webcam from "react-webcam";
import Button from "./Button";

const videoConstraints = {
  width: 1920,
  height: 1080,
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
      // height={"auto"}
      screenshotFormat="image/jpeg"
      width={"100%"}
      videoConstraints={videoConstraints}
    >
      {getScreenshot}
    </Webcam>
  );
};

export default WebCam;
