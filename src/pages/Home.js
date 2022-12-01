/* 
  Home
  이름 : 김효민
  날짜 : 2022-11-28
  
  저장된 사용자 개인 일과기록 간편 출력
*/

import { Link } from "react-router-dom";
import Button from "../components/part/Button";
import DataViewer from "../components/DataViewer";

const Home = () => {
  const onCreate = () => {
    console.log("버튼 눌림");
  };

  return (
    <div className="home">
      <h1>Home</h1>
      <Button
        onClick={onCreate}
        innerText={<Link to="/createNewData">새로운데이터</Link>}
      />
      <DataViewer />
    </div>
  );
};

export default Home;
