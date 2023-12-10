import { HTMLAttributes } from 'react'
import './ButtonStyle.scss'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

function Button({ children }: ButtonProps) {
  return (
    <button className="base-button" type="submit">
      {children}
    </button>
  )
}

export default Button
