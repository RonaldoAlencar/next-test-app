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
          ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
          : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
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
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <LinkItem href="/" text="Início" />
        <LinkItem href="/about" text="Sobre" selected={true} />
        <LinkItem href="/my-account" text="Minha Conta" />
      </ul>
    </div>
  )
}