import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        if (!res.ok) throw new Error("Failed to fetch post");
        const data = await res.json();
        setPost(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchPost();
  }, [id]);

  if (error) return <p>Error: {error}</p>;
  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetails;
