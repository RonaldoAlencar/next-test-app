import Image from "next/image"
import { YoutubeCounter } from '@charkour/react-reactions';
import moment from "moment";
import 'moment/locale/pt-br';
import api from "@/api";
moment.locale('pt-br');

interface CardProps {
  userImageURL: string;
  userName: string;
  postDate: string;
  postContent: string;
  likes?: string;
  dislikes?: string;
  feedbackId?: string;
}

function PostContent({ postContent }: { postContent: string }) {
  return (
      <span className="text-gray-400 text-sm">
        {postContent}
      </span>
  )
}

async function handleLikeClick(feedbackId: string | undefined, likes: string, dislikes: string) {
  await api.post('/post-feedback', {
    feedbackId,
    like: parseInt(likes) + 1,
    dislike: parseInt(dislikes)
  })
  location.reload()
}

async function handleDislikeClick(feedbackId: string | undefined, dislikes: string, likes: string) {
  await api.post('/post-feedback', {
    feedbackId,
    dislike: parseInt(dislikes) + 1,
    like: parseInt(likes)
  })
  location.reload()
}

export default function Card({ userImageURL, userName, postDate, postContent, likes = "0", dislikes = "0", feedbackId}: CardProps) {
  return (
    <div className={`bg-white shadow-lg rounded-lg flex flex-col space-y-4 p-4 w-full cursor-pointer`}>
      
      <div className="flex gap-10 items-center md:justify-items-start justify-between">
        <div className="flex items-center space-x-4">
          <Image src={userImageURL || 'https://avatars.githubusercontent.com/u/49104855?s=400&u=0a1f4f299df9a6d71c9db84a95729c920ad20dbc&v=4'}
            width={50}
            height={50}
            alt={userName}
            className="rounded-full"
          />
          <span className="font-bold uppercase text-gray-400 text-sm">
            {userName}
          </span>
        </div>
        <span className="text-sm text-gray-400">
          {moment(postDate).fromNow()}
        </span>
      </div>

      <div className="flex flex-col space-y-2">
        <PostContent postContent={postContent} />
      </div>

      <div className="flex items-center justify-between space-y-2">
        <YoutubeCounter
          like={likes}
          dislike={dislikes}
          onLikeClick={() => handleLikeClick(feedbackId, likes, dislikes)}
          onDislikeClick={() => handleDislikeClick(feedbackId, dislikes, likes)}
        />
      </div>
    </div>
  )
}