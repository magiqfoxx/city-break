import getPorts from "../api/getPorts";
import skyscanner from "../api/skyscanner";
import aviationEdge from "../api/aviationEdge";

export const getDate = () => {
  //2019-01-01
  const newDate = new Date();
  const month =
    newDate.getMonth() + 1 < 10
      ? "0" + (newDate.getMonth() + 1)
      : newDate.getMonth() + 1;
  const day =
    newDate.getDate() < 10 ? "0" + newDate.getDate() : newDate.getDate();
  return `${newDate.getFullYear()}-${month}-${day}`;
};

export const getPort = async (city, airport) => {
  console.log(airport);
  try {
    const response = await getPorts.get(
      `${city.countryCode}/USD/us-US/?query=${airport.codeIataAirport}`
    );
    //Airports near the destination
    console.log(response.data.Places);
    return response.data.Places[0];
  } catch (error) {
    console.log(error);
  }
};

const getAirport = airports => {
  //trying to find an airport amidst rail stations
  const results = airports.filter(airport => {
    return airport.codeIcaoAirport;
  });
  console.log(results);
  return results[0];
};
export const getNearestAirport = async (lat, lng) => {
  try {
    const locationAirports = await aviationEdge.get("", {
      params: {
        lat: lat,
        lng: lng,
        distance: 1000
      }
    });

    const airport = getAirport(locationAirports.data);
    return airport;
  } catch (error) {
    console.log(error);
  }
};

export const getQuotes = async (destinationPort, originPort, date) => {
  console.log(destinationPort, originPort, date);
  try {
    //// /SFO-sky/JFK-sky/2019-01-01?inboundpartialdate=2019-09-01")

    const response = await skyscanner.get(
      `/${originPort.PlaceId}/${destinationPort.PlaceId}/${date}`
    );
    console.log(response);
    //this.setState({response})
  } catch (error) {
    console.log(error);
  }
};
