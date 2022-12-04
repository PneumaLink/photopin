/* 
  Home
  이름 : 김효민
  날짜 : 2022-11-28
  
  저장된 사용자 개인 일과기록 간편 출력
*/
import Button from "../components/part/Button";
import DataViewer from "../components/DataViewer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const goToCreateNewData = useNavigate();

  const onCreate = () => {
    goToCreateNewData("/createNewData");
  };

  return (
    <div className="home">
      <h1>Home</h1>
      <Button onClick={onCreate} innerText={"새로운데이터"} />
      <DataViewer />
    </div>
  );
};

export default Home;
