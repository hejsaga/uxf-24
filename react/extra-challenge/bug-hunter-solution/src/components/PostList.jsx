import PostItem from "./PostItem";

const PostList = ({ posts }) => (
  <ul>
    {posts.length > 0 ? (
      posts.map((post) => <PostItem key={post.id} post={post} />)
    ) : (
      <p>No posts available.</p>
    )}
  </ul>
);

export default PostList;
