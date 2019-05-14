import geoDB from "../api/geoDB";

export const renderPopulation = population => {
  if (population > 1000000) {
    return (
      Math.floor(population / 1000000) +
      "." +
      Math.floor((population % 1000000) / 10000) +
      "m"
    );
  } else {
    let populationStr = population.toString();
    return (
      populationStr.substring(0, populationStr.length - 3) +
      "." +
      populationStr.substring(populationStr.length - 3)
    );
  }
};
export const addPlus = lng => {
  if (lng[0] !== "-") {
    return `+${lng}`;
  } else {
    return lng;
  }
};
export const getCityTime = async city => {
  try {
    const GeoDBCityId = await geoDB.get("cities?", {
      params: {
        limit: 5,
        location: `${city.lat}${addPlus(city.lng)}`,
        radius: 1000
      }
    });
    const id = GeoDBCityId.data.data[0].id;
    const time = await geoDB.get(`cities/${id}/time`);
    return time;
  } catch (error) {
    console.log(error);
  }
};
const getCountryId = async city => {
  //do I need this for anything?
  try {
    const countryId = await geoDB.get(
      `countries?namePrefix=${city.countryName}`
    );
    const wikiDataIdCountry = countryId.data.data[0].wikiDataId;
    const data = await geoDB.get(`countries/${wikiDataIdCountry}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
