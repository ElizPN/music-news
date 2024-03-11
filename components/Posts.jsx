import React from 'react';
import { usePostsData } from '../hooks/usePostsData'; 
import './Posts.css'; 

export const Posts = () => {
const {posts} = usePostsData();

  return (
    <div>
      <h2>Welcome Liam</h2>

      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <img src="/images/post.jpeg" alt={post.title} className="post-picture" />
          <div className="post-content">
            <h2 className="post-title">{post.title}</h2>
            <p className='post-summary'>{post.body}</p>
          </div>
        </div>
      ))}

    </div>
  );
};

