'use client'
import Image from "next/image"
import { useRouter } from "next/navigation"
import loginImage from "../../assets/login.jpg"
import { useState } from "react"
import { object, string } from "yup"

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

  const handleUserLogin = async () => {
    try {
      router.push('/')
    } catch (error: any) {
      console.log(error)
    }
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
      <div className="basis-2/5 drop-shadow-xl max-sm:hidden">
        <Image src={loginImage} alt="Login Image" className="h-screen overflow-hidden object-cover" />
      </div>
      
      <div className="basis-3/5 flex flex-col justify-center items-center bg-zinc-50 h-screen max-sm:w-full max-sm:basis-full">
        <div className="flex flex-col justify-start items-center w-1/2 max-sm:w-full max-sm:p-10 max-md:w-full max-md:p-10 max-lg:w-full max-lg:p-10">
          <div className="flex flex-col items-start w-full mb-6">
            <h4 className="text-gray-500">Bem vindo de volta!</h4>
            <h1 className="text-3xl font-bold text-gray-800">Entre com sua conta</h1>
          </div>

          <div className="flex flex-col w-full">
            <div className="flex flex-col w-full mb-4">
              <label htmlFor="email" className="text-gray-500 mb-2">E-mail</label>
              <input 
                type="email" 
                name="email" 
                id="email"
                onChange={(e) => setEmail({ value: e.target.value, isValid: validateField('email') ? false : true })}
                className="border border-gray-200 p-3 rounded-md focus:outline-none focus:ring focus:ring-blue-300 focus:border-transparent drop-shadow-sm"
              />
              {!email.isValid && <span className="text-red-500 text-sm mt-1">{validateField('email')}</span>}
            </div>

            <div className="flex flex-col w-full mb-4">
              <label htmlFor="password" className="mb-2 text-gray-500">Senha</label>
              <input 
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword({ value: e.target.value, isValid: validateField('password') ? false : true })}
                className="border border-gray-200 p-3 rounded-md focus:outline-none focus:ring focus:ring-blue-300 focus:border-transparent drop-shadow-sm"
              />
              {!password.isValid && <span className="text-red-500 text-sm mt-1">{validateField('password')}</span>}
            </div>
          </div>

          <div className="flex flex-col w-full ml-4 mr-4">
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-row items-center">
                <input type="checkbox" name="remember" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-gray-500 text-sm">Lembrar-me</label>
              </div>

              <a href="#" className="text-blue-700 text-sm">Esqueci minha senha</a>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <button
              className="bg-blue-700 text-white p-3 rounded-md w-full mt-4 hover:bg-blue-600 drop-shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-700"
              disabled={email.isValid || password.isValid || email.value === '' || password.value === '' ? true : false}
              onClick={handleUserLogin}
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage