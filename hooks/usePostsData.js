import { useState, useEffect } from "react";
import { getPostsDataService } from "../services/postsDataService";

const service = getPostsDataService();

export const usePostsData = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // create async function because useEffect can not receive async function as param
    (async () => {
      const posts = await service.getData();
      setPosts([...posts]);
    })();
  }, []);

  return { posts };
};
