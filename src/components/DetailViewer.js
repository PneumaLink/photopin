import MapViewer from "../components/part/MapViewer";
import { msToDate, getRandomColor } from "../functions/tools";

const DeatilViewer = ({ data }) => {
  const date = msToDate(data.createTime);
  const lat = data.location.locate.lat;
  const lng = data.location.locate.lng;

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
      <MapViewer
        lat={lat}
        lng={lng}
        mainText={data.mainText}
        color={"#000000"}
      />
    </div>
  );
};

export default DeatilViewer;
