import api from "@/api";

export type TCreatePost = {
  authorName: string;
  authorLinkPhoto: string;
  content: string;
};

export async function createPost(post: TCreatePost): Promise<TCreatePost> {
  const { data } = await api.post<TCreatePost>("/post", post);
  return data;
}