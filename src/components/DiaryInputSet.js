import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./part/Button";
import Input from "./part/Input";
import SelectBox from "./part/SelectBox";
import { DispatchFunctions } from "../App";

const defaulteTagList = ["일상", "운동", "특별", "중요"];

const DiaryInputSet = ({ img }) => {
  const dispatch = useContext(DispatchFunctions);

  const [tagList, setTagList] = useState(defaulteTagList);
  const [mainText, setMainText] = useState("");
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [tag, setTag] = useState(tagList[0]);

  const tagSelecter = (e) => {
    setTag(e.target.value);
  };

  const createPin = () => {
    dispatch.onCreate({ tag, mainText, img, location });
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
      <Button innerText={<Link to="/">"등록"</Link>} onClick={createPin} />
      <br />
      <img src={img} />
    </div>
  );
};

export default DiaryInputSet;
