import { signOut } from "next-auth/react";
interface SettingsSubMenuProps {
  show: boolean;
  setShow: (show: boolean) => void;
  userName: string;
  userEmail: string;
}

export default function SettingsSubMenu({ show, setShow, userEmail, userName }: SettingsSubMenuProps) {

  document.addEventListener('click', (e) => {
    const element = e.target as HTMLElement;
    if(element.tagName === 'IMG') return;
    setShow(false)
  })

  return (
    <div 
      className={show ? "relative" : "relative hidden"}
      onMouseLeave={() => setShow(false)}
    >
      <div className="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow absolute top-1 right-0 w-56">
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900">{userName}</span>
          <span className="block text-sm  text-gray-500 truncate">{userEmail}</span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Earnings</a>
          </li>
          <li>
            <a 
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => signOut()}
            >
              Desconectar
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}