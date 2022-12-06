import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DeatilViewer from "../components/DetailViewer";
import PinInput from "../components/PinInput";
import Button from "../components/part/Button";
import { dayDataContext, DispatchFunctions } from "../App";
import MapViewer from "../components/part/MapViewer";
import Home from "./Home";

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

  useEffect(() => {
    if (inputData && window.confirm("내용이 수정될거에요!")) {
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
      setEditMode(false);
      navigate("/detail/" + id);
    }
  }, [inputData]);

  return (
    <div>
      <h2>Detail</h2>
      {!editMode ? (
        <>
          <Button innerText={"수정"} onClick={editEvent} />
          <Button innerText={"삭제"} onClick={removeEvent} />
          {newData ? <DeatilViewer data={newData} /> : <Home />}
        </>
      ) : (
        <>
          <PinInput
            img={newData.img}
            tagList={tagList}
            defaultText={newData.mainText}
            setInputData={setInputData}
          />
          <MapViewer
            lat={newData.location.locate.lat}
            lng={newData.location.locate.lng}
            mainText={newData.mainText}
            color={"#000000"}
          />
        </>
      )}
    </div>
  );
};

export default Detail;
