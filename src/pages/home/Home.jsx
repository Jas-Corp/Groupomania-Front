import Post from "../../components/Post/Post";
import ContentLayout from "../../components/Layouts/ContentLayout/ContentLayout";
import { useEffect, useState, useCallback } from "react";
import getPosts from "./core/posts";
import CreatePost from "../../components/CreatePost/CreatePost";

// Home Component
const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts((data) => {
      setPosts(data);
    });
  }, []);

  const getUsernameFromEmail = useCallback((email) => email.split("@")[0], []);

  return (
    <ContentLayout>
      <CreatePost />
      {posts.map((post, index) => (
        <Post
          content={post.content}
          username={getUsernameFromEmail(post.author.email)}
          key={index}
        />
      ))}
    </ContentLayout>
  );
};
export default Home;
