import PostItem from "./PostItem";

const PostList = ({ posts }) => (
  <ul>
    {posts.map((post) => (
      <PostItem key={post.id} post={post} />
    ))}
  </ul>
);

export default PostList;
