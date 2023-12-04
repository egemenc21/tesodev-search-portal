import { HTMLAttributes } from 'react'
import './LargeTitleStyles.scss'
interface LargeTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

function LargeTitle({ children }: LargeTitleProps) {
  return <h1 className="heading-xl"> {children} </h1>
}

export default LargeTitle
