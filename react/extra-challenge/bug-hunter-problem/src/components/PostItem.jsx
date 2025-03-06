import { Link } from "react-router-dom";

const PostItem = ({ post }) => (
  <li>
    <Link to={`/post/${post.id}`}>{post.title}</Link>
    <p>{post.body}</p>
  </li>
);

export default PostItem;
