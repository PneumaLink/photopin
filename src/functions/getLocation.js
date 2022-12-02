/**
 * 위치정보를 출력할 수 있는 함수.
 *
 * 당장 사용하지는 못한다.
 */

const getLocation = async () => {
  const onSuccess = (result) => {
    const { coords, timestamp } = result;

    // coords.latitude; // 위도
    // coords.longitude; // 경도

    return { lat: coords.latitude, lon: coords.longitude };
    // coords.accuracy; // 위도 및 경도의 좌표 정확도 수준을 미터 단위로 나타냅니다.

    // coords.altitude; // 고도
    // coords.altitudeAccuracy; // 고도의 정확도 수준을 미터 단위로 나타냅니다.

    // coords.heading; // 장치의 이동 방향을 나타내며 도를 기준으로 합니다. 0 ~ 360
    // coords.speed; // 초당 미터 단위로 장치의 현재 속도를 나타냅니다.

    // timestamp; // 위치 반환 시간
  };
  const onError = (err) => {
    console.log(err);
  };
  // 사용자의 현재 위치 정보를 요청합니다.
  console.log(
    typeof navigator.geolocation.getCurrentPosition(onSuccess, onError),
  );
};

export default getLocation;
