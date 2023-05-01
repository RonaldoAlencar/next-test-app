import { BsDiscord, BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

type socialLogin = {
  label: string
  name: string
  icon: JSX.Element
}

export const socialLogin: socialLogin[] = [
  {
    label: 'Google',
    name: 'google',
    icon: <FcGoogle size={24} />,
  }, 
  {
    label: 'GitHub',
    name: 'github',
    icon: <BsGithub size={24} />,
  }, 
  {
    label: 'Discord',
    name: 'discord',
    icon: <BsDiscord size={24} color="#5562EA" />,
  }
]