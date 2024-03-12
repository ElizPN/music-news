import "./SinglePost.css";


export const SinglePost = ({ post }) => {
    return (
        <div>
        <h1 className="header">Header</h1>
      <div className="post-card-container">     
      <div className="post-card">
      <a href="../posts" >
      <button  class="circle-button"></button>
      </a>
        <h2 className="post-card">{post.title}</h2>
        <p className="post-summary">{post.body}</p>
        <img src="/images/post.jpeg" alt={post.title} className="post-picture" />
        </div>
       
      </div>
      </div>
      
    );
  };