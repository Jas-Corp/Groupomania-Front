import server from "../../../../config/server";
export default async function signin(email, password, callback) {
  const response = await server.post("/auth/signin", {
    email,
    password,
  });
  const data = response.data;
  callback(data);
}
