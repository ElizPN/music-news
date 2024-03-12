import { Posts } from "@/components/Posts";
import React from "react";
import { getPostsDataService } from "../services/postsDataService";
import { Header } from '../components/Header';

export async function getServerSideProps() {
  const service = getPostsDataService();
  try {
    const posts = await service.getData();
    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return {
      props: {
        posts: [],
      },
    };
  }
}

const PostsPage = ({ posts }) => {
  return (
    <div>
    <Header/>
      <Posts posts={posts} />
    </div>
  );
};

export default PostsPage;
