import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./part/Button";
import Input from "./part/Input";
import SelectBox from "./part/SelectBox";

const PinInput = ({ img, tagList, defaultText, setInputData }) => {
  const [tag, setTag] = useState(tagList[0]);
  const [newMainText, setNewMainText] = useState(defaultText);
  const navigate = useNavigate();

  const tagSelecter = (e) => {
    setTag(e.target.value);
  };

  const onClick = () => {
    setInputData({
      tag: tag,
      mainText: newMainText,
    });
  };

  const cancel = () => {
    if (window.confirm("취소됩니당!~")) navigate("/");
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
        value={newMainText}
        onChange={(e) => {
          setNewMainText(e.target.value);
        }}
      />
      <br />
      <Button innerText={"확인"} onClick={onClick} />
      <Button innerText={"취소"} onClick={cancel} />
      <br />
      <img src={img} />
    </div>
  );
};

export default PinInput;
