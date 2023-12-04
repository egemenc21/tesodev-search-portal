import { HTMLAttributes } from "react";
import './ButtonStyle.scss'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement>{}

function Button({children}:ButtonProps) {
  return <button className="base-button"> {children} </button>
}

export default Button;