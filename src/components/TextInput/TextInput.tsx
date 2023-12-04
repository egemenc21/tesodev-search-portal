import './TextInputStyles.scss'

interface InputTypes {
  type: InputEnums
}

export enum InputEnums {
  BASE,
  BORDERED,
}

function BaseInput() {
  return <input type="text" className="base-input" />
}

function BorderedInput() {
  return <input type="text" className="base-input bordered" />
}

function Input({ type }: InputTypes) {
  if (type == InputEnums.BASE) return <BaseInput/>
  else if (type == InputEnums.BORDERED) return <BorderedInput/>
  return 
}

export default Input
