import server from "../../../../config/server";
export default async function login(email, password, callback) {
  const response = await server.post("/auth/login", {
    email,
    password,
  });
  const data = response.data;
  callback(data);
}
