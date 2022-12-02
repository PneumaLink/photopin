/**
 * 김효민
 * 2022 11 29
 *
 * 사용자가 저장한 일과를 통합하여 미리보기 형식으로 보여주는 페이지
 */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { dayDataContext } from "../App";

const DataViewer = () => {
  const pinList = useContext(dayDataContext).pinList;

  return (
    <div>
      <h1>Data Viewer</h1>
      {pinList.length !== 0
        ? pinList.map((it) => (
            <div key={it.id}>
              <Link to={"/detail/" + it.id}>
                {it.tag} - {it.mainText}
              </Link>
            </div>
          ))
        : "No Data"}
    </div>
  );
};

export default DataViewer;
