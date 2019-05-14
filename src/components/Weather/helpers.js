import metaWeather from "../api/metaWeather";

export const getDate = () => {
  let today = new Date();
  const yyyy = today.getFullYear();
  const mm = today.getMonth();
  const dd = today.getDate();
  return yyyy + "/" + mm + "/" + dd;
};

export const getWeather = async (lat, lng) => {
  const stationResponse = await metaWeather.get("/search", {
    //gets information of the station - woeid
    params: {
      lattlong: `${lat}, ${lng}`
    }
  });
  const woeid = stationResponse.data[0].woeid;
  const weatheResponse = await metaWeather.get(`/${woeid}`, {
    params: {
      date: getDate()
    }
  });
  const weathers = weatheResponse.data.consolidated_weather;
  return [weathers[0], weathers[1], weathers[2]];
};
