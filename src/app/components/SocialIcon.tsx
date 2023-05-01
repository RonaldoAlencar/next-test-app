import { useState } from "react"
import Spinner from "./Spinner"

interface SocialIconProps {
  label: string,
  icon: React.ReactNode,
  onClick: () => void
}

export default function SocialIcon(props: SocialIconProps) {
  const [showSpinner, setShowSpinner] = useState(false)

  const handleClick = () => {
    setShowSpinner(true)
    props.onClick()
  }

  return (
    <div 
      className="flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-gray-100 p-2 rounded-md hover:scale-110 transition duration-200 ease-in-out transform hover:shadow-lg"
      onClick={handleClick}
    >
      <div 
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100"
      >
        <Spinner show={showSpinner} />
        {props.icon}
      </div>
      <span 
        className="text-gray-500 text-sm font-bold"
      >
        {props.label}
      </span>
    </div>
  )
}