import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./part/Button";
import Input from "./part/Input";
import SelectBox from "./part/SelectBox";
import { DispatchFunctions } from "../App";
import { locationContext } from "../pages/CreateNewData";

const defaulteTagList = ["일상", "운동", "특별", "중요"];

const DiaryInputSet = ({ img }) => {
  const dispatch = useContext(DispatchFunctions);
  const location = useContext(locationContext).location;

  const [tagList, setTagList] = useState(defaulteTagList);
  const [mainText, setMainText] = useState("");
  const [tag, setTag] = useState(tagList[0]);
  const [locationState, setLocationState] = useState(false);

  const goToHome = useNavigate();

  useEffect(() => {
    if (location.state === "success") {
      setLocationState(true);
      console.log("위치정보 확인 성공!");
    } else {
      setLocationState(false);
      console.log("위치정보 확인 중...");
    }
  }, [location]);

  const tagSelecter = (e) => {
    setTag(e.target.value);
  };

  const createPin = () => {
    if (locationState) {
      dispatch.onCreate({ tag, mainText, img, location: location.locate });
      goToHome("/");
    }
  };

  return (
    <div>
      Diary Input Set
      <br />
      테그
      <SelectBox
        name={"my select box"}
        option={tagList}
        id={"tag"}
        onChange={tagSelecter}
      />
      <br />
      제목
      <Input
        value={mainText}
        onChange={(e) => {
          setMainText(e.target.value);
        }}
      />
      <br />
      <Button innerText={"등록"} onClick={createPin} />
      <br />
      <img src={img} />
    </div>
  );
};

export default DiaryInputSet;
