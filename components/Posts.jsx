import React from 'react';
import { usePostsData } from '../hooks/usePostsData'; 

export const Posts = () => {
const {posts} = usePostsData();
console.log(posts, "state");

  return (
    <div>
      <h1>Posts Page</h1>
      <p>Welcome to the Posts Page!!!!</p>

      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}

    </div>
  );
};

