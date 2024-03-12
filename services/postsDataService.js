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
    getSinglePostData: async (postId) => {
      try {
        const response = await axios.get(`${apiURL}/${postId}`);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    getCommentsData: async(postId) => {
      try {
        const response = await axios.get(`${apiURL}/${postId}/comments`);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    postComment: async(postId, values) => {
      try {
        const response = await axios.post(`${apiURL}/${postId}/comments`, {
          ...values
      });
      } catch (error) {
        throw error;
      }
    }
  };

  return service;
};

// console.log('New comment:', values);