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
      <div className="z-50 my-4 text-base list-none divide-y divide-gray-100 rounded-lg shadow bg-gray-700 divide-gray-600 absolute top-1 right-0 w-56">
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 text-white">{userName}</span>
          <span className="block text-sm  text-gray-500 truncate text-gray-400">{userEmail}</span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:bg-gray-600 text-gray-200 hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:bg-gray-600 text-gray-200 hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:bg-gray-600 text-gray-200 hover:text-white">Earnings</a>
          </li>
          <li>
            <a 
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:bg-gray-600 text-gray-200 hover:text-white"
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