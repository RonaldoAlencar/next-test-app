import Image from "next/image"
import { YoutubeCounter } from '@charkour/react-reactions';

interface CardProps {
  userImageURL: string;
  userName: string;
  postDate: string;
  postContent: string;
  likes?: string;
  dislikes?: string;
}

function PostContent({ postContent }: { postContent: string }) {
  return (
      <span className="text-gray-400 text-sm">
        {postContent}
      </span>
  )
}

function handleLikeClick() {
  console.log('like clicked')
}

function handleDislikeClick() {
  console.log('dislike clicked')
}

export default function Card({ userImageURL, userName, postDate, postContent, likes = "0", dislikes = "0"}: CardProps) {
  return (
    <div className={`bg-white shadow-lg rounded-lg flex flex-col space-y-4 p-4`}>
      <div className="flex items-space-between">
        <div className="flex-1 flex items-center space-x-4">
          <Image src={userImageURL}
            width={50}
            height={50}
            alt={userName}
            className="rounded-full"
          />
          <span className="font-bold uppercase text-gray-400 text-sm">
            {userName}
          </span>
        </div>
        <div className="flex-1 flex items-center justify-end">
          <span className="text-sm text-gray-400">
            {postDate}
          </span>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <PostContent postContent={postContent} />
      </div>

      <div className="flex items-center justify-between space-y-2">
        <YoutubeCounter
          like={likes}
          dislike={dislikes}
          onLikeClick={handleLikeClick}
          onDislikeClick={handleDislikeClick}
        />
      </div>
    </div>
  )
}