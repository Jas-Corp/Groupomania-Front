import server from "../../../config/server";
export default async function getPosts(callback) {
  const response = await server.get("/post");
  const data = response.data;

  callback(data);
}
