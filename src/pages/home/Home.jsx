import Post from "../../components/Post/Post";
import ContentLayout from "../../components/Layouts/ContentLayout/ContentLayout";
import { useEffect, useState } from "react";
import getPosts from "./core/posts";

// Home Component
const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <ContentLayout>
      {posts.map((post, index) => (
        <Post content={post.content} username="Jas" key={index} />
      ))}
    </ContentLayout>
  );
};
export default Home;
