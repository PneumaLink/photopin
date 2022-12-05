export const getDummyData = (quantitiy) => {
  let array = [];
  let time = Date.now();
  let lat = 37.4655346;
  let lng = 126.9330361;

  if (quantitiy === undefined) {
    quantitiy = 30;
  }

  for (let i = 0; i < quantitiy; i++) {
    array.push({
      id: i,
      tag: "대충 아무 테그",
      img: "img - " + i.toString(),
      mainText: "대충 아무 텍스트 - " + i.toString(),
      createTime: time,
      editTime: time,
      location: { lat: lat, lng, lng },
    });

    time = time + 3600000;
  }

  return array;
};

export const msToDate = (duration) => {
  const date = new Date(duration);

  return {
    FullYear: date.getFullYear(),
    Month: date.getMonth() + 1,
    Date: date.getDate(),
    Hours: date.getHours(),
    Minutes: date.getMinutes(),
    Seconds: date.getSeconds(),
    Milliseconds: date.getMilliseconds(),
  };
};

export const getRandomColor = () =>
  "#" + Math.round(Math.random() * 0xffffff).toString(16);
