
export const SinglePost = ({ post }) => {
    return (
      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p>Date:</p>
        <img src="/images/post.jpeg" alt={post.title} />
      </div>
    );
  };