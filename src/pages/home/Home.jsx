import Post from "../../components/Posts/Post/Post";
import ContentLayout from "../../components/Layouts/ContentLayout/ContentLayout";
import { useEffect, useState } from "react";
import { getPosts } from "../../core/posts/posts";
import PublishInput from "../../components/Posts/PublishInput/PublishInput";
import getUsernameFromEmail from "../../core/utils/getUsernameFromEmail";
import HomeHeader from "../../components/Pages/HomeHeader/HomeHeader";

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
      <HomeHeader />
      <PublishInput reloadPost={loadPost} />

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
