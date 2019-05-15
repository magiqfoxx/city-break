import geoDB from "../api/geoDB";
import geoNames from "../api/geoNames";
import geoNamesData from "./geoNamesResponse";

const addPlus = lng => {
  if (lng[0] !== "-") {
    return `+${lng}`;
  } else {
    return lng;
  }
};

export const getCityId = async (lat, lng) => {
  //get city name by location
  try {
    const GeoDBCityId = await geoDB.get("cities?", {
      params: {
        limit: 5,
        location: `${lat}${addPlus(lng)}`,
        radius: 100
      }
    });
    return GeoDBCityId.data.data[0];
  } catch (error) {
    console.log(error);
  }
};
const getPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
export const getLocation = async () => {
  if (navigator.geolocation) {
    const position = await getPosition();
    return position;
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
};
export const setLocation = position => {
  this.setState({
    originLat: position.coords.latitude,
    originLng: position.coords.longitude
  });
};
export const getCityDataFromFile = () => {
  return geoNamesData.geonames[0];
};
export const getCityData = async city => {
  const cityResponse = await geoNames.get("", {
    params: {
      q: city
    }
  });
  return cityResponse.data.geonames[0];
};
