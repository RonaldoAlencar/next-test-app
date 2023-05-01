import Link from "next/link"
import Provider from "./Provider"
import { getSession } from "next-auth/react"
import { authOption } from "../../../pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export const metadata = {
  title: 'Sistema Olá mundo!',
  description: 'Generated by Sistema Olá mundo',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const data = await getServerSession(authOption)
  
  if(!data) {
    redirect('/login')
  }

  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true}>
          <Provider>
          <h1>Sistema: Olá mundo!</h1>
          <nav>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/users">Usuários</Link></li>
              <li><Link href="/login">Login</Link></li>
            </ul>
          </nav>
          <hr />

          {children}
          </Provider>
      </body>
    </html>
  )
}
