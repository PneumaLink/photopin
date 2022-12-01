/**
 * 김효민
 * 2022 11 29
 *
 * 사용자가 저장한 일과를 통합하여 미리보기 형식으로 보여주는 페이지
 */
import { useContext } from "react";
import { dayDataContext } from "../App";

const DataViewer = () => {
  const pinList = useContext(dayDataContext).pinList;

  return (
    <div>
      <h1>Data Viewer</h1>
      {pinList.length !== 0
        ? pinList.map((it) => (
            <div key={it.id}>
              <p>{it.id}</p>
              <img src={it.img} />
              <p>{it.tag}</p>
              <p>{it.mainText}</p>
              <p>{it.createTime.toString()}</p>
              <p>{it.editTime.toString()}</p>
              <p>{it.location.toString()}</p>
              <br />
            </div>
          ))
        : "No Data"}
    </div>
  );
};

export default DataViewer;
