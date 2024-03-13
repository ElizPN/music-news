import React from "react";
import { usePostsData } from "../hooks/usePostsData";
import { useState } from "react";
import Link from "next/link";
import "./Posts.css";

export const Posts = ({ posts }) => {
  const { truncateText } = usePostsData();

  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };
  const handleSearchClear = () => {
    setSearchQuery("");
    setCurrentPage(1);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="main-container">
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search by title"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearchClear} className="search-button">Clear</button>
      </div>
      <div className="post-card-container">
        {currentPosts.length > 0 ? (
          currentPosts.map((post) => (
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
            ))
        ) : (<p>No posts found</p>)}
      </div>

      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredPosts.length / postsPerPage) }, (_, i) => (
          <button key={i} onClick={() => setCurrentPage(i + 1)} className={currentPage === i + 1 ? 'active' : ''}>{i + 1}</button>
        ))}
      </div>
    </div>
  );
};
