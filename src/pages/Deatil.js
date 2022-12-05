import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dayDataContext } from "../App";
import DeatilViewer from "../components/DetailViewer";

const Detail = () => {
  const { id } = useParams();
  const targetData = useContext(dayDataContext).pinList;
  const newData = targetData.find((it) => it.id.toString() === id);

  return (
    <div>
      <h2>Detail</h2>
      {newData ? (
        <DeatilViewer data={newData} />
      ) : (
        "데이터가 없네? 이럴리가 없는데?"
      )}
    </div>
  );
};

export default Detail;
