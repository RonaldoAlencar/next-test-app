interface SocialIconProps {
  label: string,
  icon: React.ReactNode,
  onClick: () => void
}

export default function SocialIcon(props: SocialIconProps) {
  return (
    <div 
      className="flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
      onClick={() => props.onClick()}
    >
      <div 
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100"
      >
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