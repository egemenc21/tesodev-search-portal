import { HTMLAttributes } from 'react'
import './ButtonStyle.scss'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  disabled?:boolean
}

function Button({ children, disabled }: ButtonProps) {
  return (
    <button className="base-button" disabled={disabled} type="submit">
      {children}
    </button>
  )
}

export default Button
