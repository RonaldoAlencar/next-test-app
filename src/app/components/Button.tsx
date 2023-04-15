import { useEffect, useState } from "react"

type ButtonProps = {
  type: 'button' | 'submit' | 'reset'
  textContent: string
  disabled?: boolean
  className?: string
  color?: 'success' | 'error' | 'warning' | 'info'
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button(props: ButtonProps) {
  const [defaultClassName, setDefaultClassName] = useState('bg-blue-700 text-white p-3 rounded-md w-full mt-4 hover:bg-blue-600 drop-shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-700')
  const [defaultColor, setDefaultColor] = useState('bg-blue-700 hover:bg-blue-600')

  useEffect(() => {
    if (props.color === 'success') {
      setDefaultColor(' bg-green-700 hover:bg-green-600')
    } else if (props.color === 'error') {
      setDefaultColor(' bg-red-700 hover:bg-red-600')
    } else if (props.color === 'warning') {
      setDefaultColor(' bg-yellow-500 hover:bg-yellow-600')
    } else if (props.color === 'info') {
      setDefaultColor(' bg-blue-700 hover:bg-blue-600')
    }
  }, [props.color])

  return (
    <button
      type={props.type}
      className={props.className ? props.className + defaultColor: defaultClassName + defaultColor}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.textContent}
    </button>
  )
}