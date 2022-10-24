import server from "../../../config/server";
export default async function createPost(content, images, token, callback) {
  await server.post(
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
  callback();
}
