import "./SinglePost.css";


export const SinglePost = ({ post }) => {
    return (
        <div>
      <div className="post-card-container">     
      <div className=".single-post-card">
      <a href="../posts" >
      <button  className="circle-button"></button>
      </a>
        <h2>{post.title}</h2>
        <p className="post-text">{post.body}</p>
        <img src="/images/post.jpeg" alt={post.title} className="post-picture" />
        </div>
       
      </div>
      </div>
      
    );
  };