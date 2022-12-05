import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/part/Button";
import MapViewer from "../components/part/MapViewer";
import { msToDate, getRandomColor } from "../functions/tools";

const DeatilViewer = ({ data }) => {
  const [editMode, setEditMode] = useState(false);

  const navigate = useNavigate();

  const editEvent = () => {
    if (window.confirm("핀을 잠깐만 뽑을까요?")) {
      setEditMode(true);
    }
  };

  const removeEvent = () => {
    if (window.confirm("핀을 뽑아버리겠습니까?")) {
      // window.open("exit.html", "Thanks for Visiting!");
      alert("그동안 고마웠어요!");
      navigate("/");
    }
  };

  const date = msToDate(data.createTime);

  return (
    <div>
      <Button innerText={"수정"} onClick={editEvent} />
      <Button innerText={"삭제"} onClick={removeEvent} />
      <p>ID : {data.id}</p>
      <p>Tag : {data.tag}</p>
      <p>Main Text : {data.mainText}</p>
      <p>
        {date.FullYear}/{date.Month}/{date.Date} {date.Hours}:{date.Minutes}:
        {date.Seconds}
      </p>
      <img src={data.img} width="100%" alt="pinImage"></img>
      <p>
        Location : {data.location.lat} / {data.location.lng}
      </p>
      <MapViewer
        lat={data.location.lat}
        lng={data.location.lng}
        mainText={data.mainText}
        color={getRandomColor()}
      />
    </div>
  );
};

export default DeatilViewer;
