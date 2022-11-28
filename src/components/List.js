import { useContext, useEffect } from "react";
import { DiaryData } from "../App";
import Map from "./api/Map";

const List = () => {
  const diaryData = useContext(DiaryData).diaryData;

  return (
    <div>
      <h2>List</h2>
      {diaryData.length > 0 ? (
        diaryData.map((it) => (
          <div key={it.id}>
            <img src={it.img} />
            <p>{it.mainText}</p>
            <p>{it.tag}</p>
            <p>create : {it.createTime}</p>
            <p>last edit : {it.editTime}</p>
            <Map width="500px" height="400px" localData={it.locate} />
          </div>
        ))
      ) : (
        <h2>List Data is Empty</h2>
      )}
    </div>
  );
};

export default List;
