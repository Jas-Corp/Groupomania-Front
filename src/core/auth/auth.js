import server from "../../config/server";

export async function login(email, password, callback) {
  const response = await server.post("/auth/login", {
    email,
    password,
  });
  const data = response.data;
  callback(data);
}

export async function signin(email, password, callback) {
  const response = await server.post("/auth/signin", {
    email,
    password,
  });
  const data = response.data;
  callback(data);
}
