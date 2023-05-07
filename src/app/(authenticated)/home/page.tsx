'use client'
import Button from "@/app/components/Button"
import Card from "@/app/components/Card"
import Input from "@/app/components/Input"
import { getPosts } from "./services/get-posts"
import { createPost } from "./services/create-post"
import { getSession } from "next-auth/react"

export default async function Home() {
  const posts = await getPosts()

  async function handleSendPost() { 
    const { user } = await getSession() as { user: { name: string, email: string, image: string } }
    
    await createPost({
      authorName: user.name,
      authorLinkPhoto: user.image,
      content: (document.getElementById('whatAreYouThinking') as HTMLInputElement).value,
    })

    location.reload()
  }

  return (
      <>
      <div className="mt-2 flex gap-2">
        <div className="flex-1">
          <Input
            onChange={() => {}}
            id="whatAreYouThinking"
            name="whatAreYouThinking"
            type="text"
            placeholder="O que você está pensando?"
          />
        </div>
        <div className="flex-2">
          <Button
            onClick={handleSendPost}
            textContent="Publicar"
            type="button"
            color="success"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-4 mx-0 sm:mx-24">
        { posts.map((post) => (
          <Card
            key={post.id}
            userImageURL={post.authorLinkPhoto}
            userName={post.authorName}
            postDate={post.publishedAt}
            postContent={post.content}
            likes={post.postFeedback.countLike.toString()}
            dislikes={post.postFeedback.countDislike.toString()}
            feedbackId={post.idPostFeedback.toString()}
          />
        ))}
      </div>
      </>
  )
}
