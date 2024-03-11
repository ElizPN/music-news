import React from "react";
import { usePostsData } from "../hooks/usePostsData";
import Link from "next/link";
import "./Posts.css";

export const Posts = ({ posts }) => {
  const { truncateText } = usePostsData();

  return (
    <div>
      <h2>Welcome Liam</h2>
      <div className="post-card-container">
        {posts?.length &&
          posts.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              className="post-link"
            >
              <div key={post.id} className="post-card">
                <img
                  src="/images/post.jpeg"
                  alt={post.title}
                  className="post-picture"
                />
                <div className="post-content">
                  <h2 className="post-title">{post.title}</h2>
                  <p className="post-summary">{truncateText(post.body, 100)}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};
