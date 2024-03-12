
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { SinglePost } from '../../components/SinglePost';
import { Header } from '../../components/Header';
import { getPostsDataService } from '../../services/postsDataService'; // Adjust the path as per your project structure

export default function Post() {
  const router = useRouter();
  const { postId } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (postId) {
      const fetchData = async () => {
        try {
          const postData = await getPostsDataService().getSinglePostData(postId);
          setPost(postData);
        } catch (error) {
          console.error('Error fetching post:', error);
        }
      };

      fetchData();
    }
  }, [postId]);

  return (
    <div>
        <Header/>
      {post ? <SinglePost post={post} /> : <p>Loading...</p>}
    </div>
  );
}