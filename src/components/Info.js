import Button from "./Button";
import { DispatchDiaryData, DiaryData } from "../App";
import { useContext, useState } from "react";

const Info = () => {
  const [flag, setFlag] = useState(true);
  const [newTag, setNewTag] = useState("");
  const [mainText, setMainText] = useState("");
  const [tag, setTag] = useState(["일상", "운동", "특별한 일"]);
  const [selectedTag, setSelectedTag] = useState(tag[0]);

  const dispatchData = useContext(DispatchDiaryData);
  const diaryData = useContext(DiaryData);
  const imgData = diaryData.imgData;

  const addTag = (input) => {
    setTag([...tag, input]);
  };

  const subTag = (tagName) => {
    setTag(tag.filter((it) => it !== tagName));
  };

  const btnActivateEventHandler = (e) => {
    setFlag(!flag);
  };

  const addTagEventHandler = () => {
    addTag(newTag);
    setNewTag("");
  };

  const subTagEventHandler = (e) => {
    subTag(e.target.value);
  };

  const submitEventHandler = (e) => {
    const newData = {
      img: imgData,
      tag: selectedTag,
      mainText: mainText,
    };
    dispatchData.onCreate(newData);
    dispatchData.setImgData("");
  };

  const selectedTagEventHandler = (e) => {
    setSelectedTag(e.target.value);
  };

  return (
    <div className="info">
      <img src={imgData} />
      <div className="diaryFormat">
        {flag ? (
          <>
            <label htmlFor="tag-select">Tag</label>
            <select
              name="tag"
              id="tag-select"
              onChange={selectedTagEventHandler}
            >
              {tag.map((it) => {
                return (
                  <option key={it} value={it}>
                    {it}
                  </option>
                );
              })}
            </select>
            <input
              type={"text"}
              name={"mainText"}
              onChange={(e) => {
                setMainText(e.target.value);
              }}
              value={mainText}
            ></input>
            <Button text={"테그 관리"} onClick={btnActivateEventHandler} />
            <Button text={"핀 꽂기"} onClick={submitEventHandler} />
          </>
        ) : (
          <>
            {tag.map((it) => (
              <Button
                key={it}
                text={it + " X"}
                onClick={subTagEventHandler}
                value={it}
              />
            ))}
            <input
              type={"text"}
              neme={"tagName"}
              onChange={(e) => {
                setNewTag(e.target.value);
              }}
              value={newTag}
            />
            <Button text={"추가"} onClick={addTagEventHandler} />
            <Button text={"취소"} onClick={btnActivateEventHandler} />
          </>
        )}
      </div>
    </div>
  );
};

export default Info;
