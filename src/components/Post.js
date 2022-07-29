import Card from "./ui/Card";

const Post = ({ post }) => {
  return (
    <Card>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </Card>
  );
};

export default Post;
