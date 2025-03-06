import { useEffect, useState } from "react";
import PostList from "../components/PostList";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [posts]); // BUG: This will cause infinite requests

  return (
    <div>
      <h1>Blog Posts</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default Home;
