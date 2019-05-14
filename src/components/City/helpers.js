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

export const getCity = async (lat, lng) => {
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

export const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(this.setLocation);
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
  this.setState({
    city: geoNamesData.geonames[0]
  });
};
export const getCityData = async city => {
  const cityResponse = await geoNames.get("", {
    params: {
      q: city
    }
  });
  this.setState({
    city: cityResponse.data.geonames[0]
  });
};
