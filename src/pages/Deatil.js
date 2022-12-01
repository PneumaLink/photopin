import { useContext } from "react";
import { useParams } from "react-router-dom";
import { dayDataContext } from "../App";

const Detail = () => {
  const { id } = useParams();
  const targetData = useContext(dayDataContext).pinList;
  const findTarget = (it) => it.id == id;
  const newData = targetData.find(findTarget);

  return (
    <div>
      <h2>Detail</h2>
      {newData ? (
        <div>
          <p>{newData.id}</p>
          <p>{newData.tag}</p>
          <p>{newData.mainText}</p>
          <p>{newData.createTime.toString()}</p>
          <p>{newData.editTime.toString()}</p>
          <p>{newData.location.toString()}</p>
          <img src={newData.img}></img>
        </div>
      ) : (
        "데이터가 없네? 이럴리가 없는데?"
      )}
    </div>
  );
};

export default Detail;
