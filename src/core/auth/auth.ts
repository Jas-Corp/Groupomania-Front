import server from "../../config/server";

export async function login(
  email: string,
  password: string,
  callback: (data: any) => void
) {
  const response = await server.post("/auth/login", {
    email,
    password,
  });
  const data = response.data;
  callback(data);
}

export async function signin(
  email: string,
  password: string,
  callback: (data: any) => void
) {
  const response = await server.post("/auth/signin", {
    email,
    password,
  });
  const data = response.data;
  callback(data);
}
