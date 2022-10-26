import Post from "../../components/Post/Post";
import ContentLayout from "../../components/Layouts/ContentLayout/ContentLayout";
import { useEffect, useState } from "react";
import { getPosts } from "../../core/posts/posts";
import CreatePost from "../../components/CreatePost/CreatePost";
import getUsernameFromEmail from "../../core/utils/getUsernameFromEmail";

// Home Component
const Home = () => {
  const [posts, setPosts] = useState([]);

  const loadPost = () => {
    getPosts((data) => {
      setPosts(data);
    });
  };

  useEffect(() => loadPost(), [posts]);

  return (
    <ContentLayout>
      <CreatePost reloadPost={loadPost} />
      {posts.reverse().map((post, index) => (
        <Post
          post={post}
          username={getUsernameFromEmail(post.author.email)}
          key={index}
        />
      ))}
    </ContentLayout>
  );
};
export default Home;
