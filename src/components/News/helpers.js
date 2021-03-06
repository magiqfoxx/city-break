import newsApi from "../api/newsApi";

export const getNewsData = async country => {
  try {
    const response = await newsApi.get("", {
      params: {
        country: country
      }
    });
    return response.data.articles;
  } catch (error) {
    console.log(error);
  }
};
