import restCountries from "../api/rest-countries";

export const renderPopulation = population => {
  if (population > 1000000) {
    return (
      Math.floor(population / 1000000) +
      "." +
      Math.floor((population % 1000000) / 10000) +
      "m"
    );
  } else {
    return (
      population.substring(0, population.length - 3) +
      "." +
      population.substring(population.length - 3)
    );
  }
};

export const getCountryData = async city => {
  try {
    const response = await restCountries.get(`${city.countryName}`);
    let data = response.data[0];
    return {
      currencyName: data.currencies[0].name,
      currencySymbol: data.currencies[0].symbol,
      countryData: data,
      callingCode: data.callingCodes,
      capital: data.capital,
      flag2: data.flag,
      gini: data.gini,
      language: data.languages[0].name,
      countryPopulation: data.population,
      region: data.region
    };
  } catch (error) {
    console.log(error);
  }
};
