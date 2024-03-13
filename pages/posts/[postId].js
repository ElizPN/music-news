
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { SinglePost } from '../../components/SinglePost';
import { PageHeader } from '../../components/common/PageHeader';
import { getPostsDataService } from '../../services/postsDataService'; 
import {Comments} from '../../components/Comments'; 

export default function Post() {
  const router = useRouter();
  const { postId } = router.query;
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null);
  

  useEffect(() => {
    if (!postId) {
      return;
    }

    const fetchData = async () => {
      try {
        const postData = await getPostsDataService().getSinglePostData(postId);
        setPost(postData);

        const commentsData = await getPostsDataService().getCommentsData(postId);
        setComments(commentsData);
      } catch (error) {
        console.error('Error fetching post:', error);
      }

    };

    fetchData();
  }, [postId]);

  return (
    <div style={{ backgroundColor: "#efefef"}}>
        <PageHeader/>
      {post ? <SinglePost post={post} /> : <p>Loading...</p>}
      {comments ? <Comments comments={comments} postId={postId} /> : ''}
    </div>
  );
}