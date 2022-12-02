import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dayDataContext } from "../App";
import Button from "../components/part/Button";
import MapViewer from "../components/part/MapViewer";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const Detail = () => {
  const { id } = useParams();
  const targetData = useContext(dayDataContext).pinList;
  const newData = targetData.find((it) => it.id.toString() === id);
  const [editMod, setEditMod] = useState(false);

  const editEvent = () => {
    console.log("evnet Edit");
  };

  const removeEvent = () => {
    console.log("evnet Remove");
  };

  const getRandomColor = () =>
    "#" + Math.round(Math.random() * 0xffffff).toString(16);

  return (
    <div>
      <h2>Detail</h2>
      {newData ? (
        <div>
          <Button innerText={"수정"} onClick={editEvent} />
          <Button innerText={"삭제"} onClick={removeEvent} />
          <p>{newData.id}</p>
          <p>{newData.tag}</p>
          <p>{newData.mainText}</p>
          <p>{newData.createTime.toString()}</p>
          <p>{newData.editTime.toString()}</p>
          <img src={newData.img} width="100%" alt="pinImage"></img>
          <p>
            {newData.location.lat} : {newData.location.lng}
          </p>
          <MapViewer
            lat={newData.location.lat}
            lng={newData.location.lng}
            mainText={newData.mainText}
            color={getRandomColor()}
          />
        </div>
      ) : (
        "데이터가 없네? 이럴리가 없는데?"
      )}
    </div>
  );
};

export default Detail;
