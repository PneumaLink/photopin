import MapViewer from "../components/part/MapViewer";
import { msToDate, getRandomColor } from "../functions/tools";

const DeatilViewer = ({ data }) => {
  const date = msToDate(data.createTime);

  return (
    <div>
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
