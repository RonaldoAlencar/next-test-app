export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export async function getUsers(): Promise<User[]> {
  const response = await fetch('https://reqres.in/api/users');
  const users = await response.json();
  return users?.data || [];
}