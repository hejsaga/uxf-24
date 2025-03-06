import { useEffect, useState } from "react";
import PostList from "../components/PostList";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (posts.length === 0) return <p>No posts found.</p>;

  return (
    <div>
      <h1>Blog Posts</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default Home;
