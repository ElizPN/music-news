
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { SinglePost } from '../../components/SinglePost';
import { PageHeader } from '../../components/common/PageHeader';
import { getPostsDataService } from '../../services/postsDataService'; 

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
        <PageHeader/>
      {post ? <SinglePost post={post} /> : <p>Loading...</p>}
    </div>
  );
}