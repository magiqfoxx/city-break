import googlePlaces from "../api/googlePlaces";
import googlePlacesPhoto from "../api/googlePlacesPhoto";
import googleSearch from "../api/googleSearch";

export const getPlacesOfInterest = allLandmarks => {
  let landmarks = allLandmarks.data.results;
  let newLandmarks = [];
  for (let landmark of landmarks) {
    if (
      landmark.types.includes("point_of_interest") &&
      !landmark.types.includes("travel_agency") &&
      landmark.rating > 4
    ) {
      newLandmarks.push(landmark);
    }
    return newLandmarks;
  }
};

export const getLandmarksData = async (lat, lng) => {
  try {
    const response = await googlePlaces.get("", {
      params: {
        location: `${lat},${lng}`,
        rankby: "prominence",
        keyword: "must see"
      }
    });
    getPlacesOfInterest(response);
  } catch (error) {
    console.log(error);
  }
};

export const getPhoto = async photoRef => {
  try {
    const response = await googlePlacesPhoto.get("", {
      params: {
        photoreference: photoRef,
        maxwidth: 300
      }
    });
    return response;
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const getLandmarkImg = async landmark => {
  try {
    const response = await googleSearch.get("", {
      params: {
        q: landmark.name
      }
    });
    return response.data.items[0].image.thumbnailLink;
  } catch (error) {
    console.log(error);
  }
};
