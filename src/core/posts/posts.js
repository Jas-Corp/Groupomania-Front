import server from "../../config/server";
export async function getPosts(callback) {
  const response = await server.get("/post");
  const data = response.data;
  callback(data);
}

export async function createPost(content, images, token, callback) {
  const data = await server.post(
    "/post/create-post",
    {
      content,
      images,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  callback(data.data);
}
