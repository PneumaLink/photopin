import { useEffect } from "react";

const GetLocal = async () => {
  let locationData = {
    loaded: false,
    coordinates: { lat: 0, lng: 0 },
  };

  const onSuccess = (location) => {
    locationData = {
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    };
  };

  const onError = (error) => {
    locationData = {
      loaded: true,
      error,
    };
  };

  if (!("geolocation" in navigator)) {
    onError({
      code: 0,
      message: "Geolocation not supported",
    });
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  console.log(locationData);

  return locationData;
};

export default GetLocal;
