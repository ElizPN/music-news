import { useState } from "react";


export const usePostsData = () => {
  const [posts, setPosts] = useState([]);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  };
  
  return { posts, truncateText };
};
