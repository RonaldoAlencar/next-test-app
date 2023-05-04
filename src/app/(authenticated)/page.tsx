'use client'
import { useSession, signOut } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()

  return (
      <>
        <h2>Estou na home do app</h2>

        {session && (
          <div>
            <h2>Estou logado</h2>
            <p>{session?.user?.email}</p>
            <button onClick={() => signOut()}>Sair</button>
          </div>
        )}
      </>
  )
}
