import Link from "next/link"
import Provider from "./Provider"
import { getSession } from "next-auth/react"
import { authOption } from "../../../pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import Header from "./Header/Index"
import './globals.css'
import Container from "../components/Container"

export const metadata = {
  title: 'Mural de Mensagens',
  description: 'Sistema de mural de mensagens',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const data = await getServerSession(authOption)
  
  if(!data) {
    redirect('/login')
  }

  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true} className="bg-gray-100">
          <Provider>
            <Header session={data} />
            <Container>
              {children}
            </Container>
          </Provider>
      </body>
    </html>
  )
}
