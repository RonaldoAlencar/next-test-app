'use client'
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'

export default function Home() {
  const { data: session } = useSession()

  return (
      <>
        <h2>Estou na home do app</h2>

        {session && (
          <div>
            <h2>Estou logado</h2>
            <p>{session?.user?.email}</p>
            <Image src={session?.user?.image || '/'} alt={session?.user?.name || ''} width={100} height={100} />
            <button onClick={() => signOut()}>Sair</button>
          </div>
        )}
      </>
  )
}
