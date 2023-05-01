'use client'
import Image from "next/image"
import { useRouter } from "next/navigation"
import loginImage from "../../assets/login.jpg"
import { useEffect, useState } from "react"
import { object, string } from "yup"
import Head from "./head"
import Input from "@/app/components/Input"
import { Lock, Mail } from "lucide-react"
import Button from "@/app/components/Button"
import Modal from "@/app/components/Modal"
import { signIn } from "next-auth/react"
import SocialIcon from "@/app/components/SocialIcon"
import { BsGithub } from "react-icons/bs"
import { FcGoogle } from "react-icons/fc"

const userEmailSchema = object().shape({
  email: string().required('O E-mail é obrigatório').email('O e-mail é inválido'),
})

const userPasswordSchema = object().shape({
  password: string().required('A senha é obrigatória'),
})

type email = {
  value: string
  isValid: boolean
}

type password = {
  value: string
  isValid: boolean
}

const LoginPage = () => {
  const router = useRouter()
  const [email, setEmail] = useState<email>({ value: '', isValid: true })
  const [password, setPassword] = useState<password>({ value: '', isValid: true })
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleUserLogin = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    const response = await signIn('credentials', {
      email: email.value,
      password: password.value,
      redirect: false
    })

    if (!response || response.status !== 200) {
      return 
    }

    router.push('/')
  }

  const validateField = (field: string) => {
    try {
      if (field === 'email') {
        userEmailSchema.validateSync({ email: email.value })
        return true
      }

      if (field === 'password') {
        userPasswordSchema.validateSync({ password: password.value })
        return true
      }
    } catch (error: any) {
      return error.message
    }
  }

  return (
    <div className="flex flex-row">
      <Head />
      <div className="basis-2/5 drop-shadow-xl max-sm:hidden">
        <Image src={loginImage} alt="Login Image" className="h-screen overflow-hidden object-cover" priority={true} />
      </div>
      
      <div className="basis-3/5 flex flex-col justify-center items-center bg-zinc-50 h-screen max-sm:w-full max-sm:basis-full">
        <div className="flex flex-col justify-start items-center w-1/2 max-sm:w-full max-sm:p-10 max-md:w-full max-md:p-10 max-lg:w-full max-lg:p-10">
          <div className="flex flex-col items-start w-full mb-6">
            <h4 className="text-gray-500">Bem vindo de volta!</h4>
            <h1 className="text-3xl font-bold text-gray-800">Entre com sua conta</h1>
          </div>

          <div className="flex flex-col w-full">
            <div className="flex flex-col w-full mb-4">
              <Input
                label="E-mail"
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail({ value: e.target.value, isValid: validateField('email') ? false : true })}
                errorMessage={!email.isValid && validateField('email')}
                icon={{
                  component: <Mail size={24} />,
                  position: 'left'
                }}
              />
            </div>

            <div className="flex flex-col w-full mb-4">
              <Input
                label="Senha"
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword({ value: e.target.value, isValid: validateField('password') ? false : true })}
                errorMessage={!password.isValid && validateField('password')}
                icon={{
                  component: <Lock size={24} />,
                  position: 'left'
                }}
              />
            </div>
          </div>

          <div className="flex flex-col w-full ml-4 mr-4">
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-row items-center">
                <input type="checkbox" name="remember" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-gray-500 text-sm">Lembrar-me</label>
              </div>

              <a 
                href="#" 
                className="text-blue-700 text-sm"
                onClick={() => setIsModalOpen(true)}
              >Esqueci minha senha</a>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <Button
              type="button"
              textContent="Entrar"
              onClick={(event) => handleUserLogin(event)}
              disabled={email.isValid || password.isValid || email.value === '' || password.value === '' ? true : false}
            />
          </div>

          <div className="flex flex-col w-full mt-4">
            <span className="text-gray-500 text-sm">Ou entre com</span>
            <div className="flex flex-row justify-center items-center w-full gap-4">
              <SocialIcon label="Github" icon={<BsGithub size={24} />} onClick={() => signIn('github', { callbackUrl: process.env.NEXTAUTH_URL })} />
              <SocialIcon label="Google" icon={<FcGoogle size={24} />} onClick={() => signIn('google', { callbackUrl: process.env.NEXTAUTH_URL })} />
            </div>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Recuperar senha"
      >
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex flex-col w-full mt-2">
            <Input
              label="Digite seu e-mail para recuperar sua senha"
              type="email"
              name="email"
              id="email_recover"
              onChange={(e) => setEmail({ value: e.target.value, isValid: validateField('email') ? false : true })}
              errorMessage={!email.isValid && validateField('email')}
              icon={{
                component: <Mail size={24} />,
                position: 'left'
              }}
            />
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default LoginPage