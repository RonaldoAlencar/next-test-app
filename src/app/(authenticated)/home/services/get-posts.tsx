import api from "@/api";

export type Post = {
    id: number;
    content: string;
    authorName: string;
    authorLinkPhoto: string;
    publishedAt: string;
    idPostFeedback: number;
    postFeedback: {
      id: number;
      countLike: number;
      countDislike: number;
    }
};

export async function getPosts(): Promise<Post[]> {
  const { data } = await api.get<Post[]>("/posts");
  return data;
}