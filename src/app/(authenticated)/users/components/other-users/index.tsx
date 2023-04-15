'use client'

import React from "react"
import { User, getUsers } from "../../services/get-users"
import Link from "next/link"

type Props = {
  currentUserId: string
}

const OtherUsers = ({ currentUserId }: Props) => {
  const [otherUsers, setOtherUsers] = React.useState<User[]>([])

  React.useEffect(() => {
    (async () => {
      const users = await getUsers()

      setOtherUsers(users.filter((user) => user.id !== parseInt(currentUserId)))
    })()
  }, [currentUserId, setOtherUsers])

  if (otherUsers.length === 0) {
    return <>Carregando</>
  }

  return <ul>
    {otherUsers.map((user) => (
      <li key={user.id}>
        <Link href={`/users/${user.id}`}>{user.first_name} - {user.last_name} ({user.email})</Link>
      </li>
    ))}
  </ul>
}

export default OtherUsers