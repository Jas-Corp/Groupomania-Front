import server from "../../../config/server";
export default async function createPost(content, token, callback) {
  await server.post(
    "/post/create-post",
    {
      content,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  callback();
}
