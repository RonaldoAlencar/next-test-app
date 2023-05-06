interface HamburgerMenuProps {
  show: boolean;
}

interface LinkItemProps {
  href: string;
  text: string;
  selected?: boolean;
}

function LinkItem ({ href, text, selected }: LinkItemProps) {
  return (
    <li>
      <a 
        href={href}
        className={
          selected 
          ? "block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
          : "block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:p-0 md:hover:text-blue-500 hover:bg-gray-700 border-gray-700 text-white"
        }
      >
        {text}
      </a>
    </li>
  )
}

export default function HamburgerMenu({ show }: HamburgerMenuProps) {
  return (
    <div className={show ? "items-center justify-between w-full md:flex md:w-auto md:order-1" : "hidden"}>
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
        <LinkItem href="/" text="Início" />
        <LinkItem href="/about" text="Sobre" selected={true} />
        <LinkItem href="/my-account" text="Minha Conta" />
      </ul>
    </div>
  )
}