import { User } from "./get-users";

export async function getUserById(id: string): Promise<User> {
  const response = await fetch(`https://reqres.in/api/users/${id}`);
  const user = await response.json();
  return user?.data || {};
}