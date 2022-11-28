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
            {it.img ? <img src={it.img} /> : <p>No image Data</p>}
            <p>{it.mainText}</p>
            <p>{it.tag}</p>
            <p>create : {it.createTime}</p>
            <p>last edit : {it.editTime}</p>
            {it.locate ? (
              <Map width="500px" height="400px" localData={it.locate} />
            ) : (
              <p>No Location Data</p>
            )}
          </div>
        ))
      ) : (
        <h2>List Data is Empty</h2>
      )}
    </div>
  );
};

export default List;
