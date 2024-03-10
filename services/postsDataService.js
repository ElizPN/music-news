import axios from "axios";


const apiURL = "https://jsonplaceholder.typicode.com/posts";

// function that creates and returns service for fetching data
export const getPostsDataService = () => {
  const service = {
    getData: async () => {
      try {
        const response = await axios.get(apiURL);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  };

  return service;
};
