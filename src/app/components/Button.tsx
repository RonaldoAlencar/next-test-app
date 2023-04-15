type ButtonProps = {
  type: 'button' | 'submit' | 'reset'
  textContent: string
  disabled?: boolean
  className?: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button(props: ButtonProps) {
  const defaultClassName = 'bg-blue-700 text-white p-3 rounded-md w-full mt-4 hover:bg-blue-600 drop-shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-700'

  return (
    <button
      type={props.type}
      className={props.className ? props.className : defaultClassName}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.textContent}
    </button>
  )
}