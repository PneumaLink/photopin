import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DeatilViewer from "../components/DetailViewer";
import PinInput from "../components/PinInput";
import Button from "../components/part/Button";
import { dayDataContext, DispatchFunctions } from "../App";
import MapViewer from "../components/part/MapViewer";
import { getRandomColor } from "../functions/tools";

const Detail = () => {
  const { id } = useParams();
  const targetData = useContext(dayDataContext).pinList;
  const newData = targetData.find((it) => it.id.toString() === id);
  const tagList = useContext(dayDataContext).tagList;
  const [editMode, setEditMode] = useState(false);
  const [inputData, setInputData] = useState(null);
  const pinDispatch = useContext(DispatchFunctions).pinDispatch;

  const navigate = useNavigate();

  const editEvent = () => {
    if (window.confirm("핀을 잠깐만 뽑을까요?")) {
      setEditMode(true);
    }
  };

  const removeEvent = () => {
    if (window.confirm("핀을 뽑아버리겠습니까?")) {
      pinDispatch({ type: "REMOVE", id: newData.id });
      navigate("/");
    }
  };

  const setOnClick = () => {
    if (window.confirm("내용이 수정될거에요!") && inputData) {
      pinDispatch({
        type: "EDIT",
        data: {
          id: newData.id,
          tag: inputData.tag,
          img: newData.img,
          mainText: inputData.mainText,
          createTime: newData.createTime,
          editTime: new Date(),
          location: newData.location,
        },
      });

      navigate("/");
    } else {
      alert("어라? input받은 데이터가 없네요?");
    }
  };

  return (
    <div>
      <h2>Detail</h2>
      {!editMode ? (
        <>
          <Button innerText={"수정"} onClick={editEvent} />
          <Button innerText={"삭제"} onClick={removeEvent} />
          {newData ? (
            <DeatilViewer data={newData} />
          ) : (
            "데이터가 없네? 이럴리가 없는데?"
          )}
        </>
      ) : (
        <>
          <PinInput
            img={newData.img}
            tagList={tagList}
            defaultText={newData.mainText}
            setInputData={setInputData}
            setOnClick={setOnClick}
          />
          <MapViewer
            lat={newData.location.locate.lat}
            lng={newData.location.locate.lng}
            mainText={newData.mainText}
            color={getRandomColor()}
          />
        </>
      )}
    </div>
  );
};

export default Detail;
