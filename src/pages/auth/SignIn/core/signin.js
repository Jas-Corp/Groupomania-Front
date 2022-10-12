import server from "../../../../config/server";
export default async function signin(
  email,
  password,
  confirmed_password,
  callback
) {
  const response = await server.post("/auth/signin", {
    email,
    password,
    confirmed_password,
  });
  callback(response.data);
}