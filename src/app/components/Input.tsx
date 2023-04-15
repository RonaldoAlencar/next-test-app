type InputProps = {
  type: string
  name: string
  id: string
  className?: string
  label?: string
  errorMessage?: string
  icon?: {
    component: React.ReactNode
    position: 'left' | 'right'
  }
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input(props: InputProps) {
  const defaultClassName = `border border-gray-200 p-3 rounded-md focus:outline-none focus:ring focus:ring-blue-300 focus:border-transparent drop-shadow-sm w-full ${props.icon?.position === 'left' ? 'pl-10' : ''} ${props.icon?.position === 'right' ? 'pr-10' : ''}`

  return (
    <>
      {props.label && <label htmlFor={props.id} className="text-gray-500 mb-2">{props.label}</label>}
      <div className="relative w-full">
        <input 
          type={props.type}
          name={props.name}
          id={props.id}
          className={props.className ? props.className : defaultClassName }
          onChange={props.onChange}
        />
        {props.icon && props.icon.position === 'left' && (
          <div className={`absolute top-3 left-3 text-gray-500`}>
            {props.icon.component}
          </div>
        )}
        {props.icon && props.icon.position === 'right' && (
          <div className={`absolute top-3 right-3 text-gray-500`}>
            {props.icon.component}
          </div>
        )}
      {props.errorMessage && <span className="text-red-500 text-sm mt-1">{props.errorMessage}</span>}
      </div>
    </>
  )
}