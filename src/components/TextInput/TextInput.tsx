import './TextInputStyles.scss'

interface Props{
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

interface InputTypes extends Props{
  type: string;   
}

export enum InputEnums {
  BASE = 'base', 
  BORDERED = 'bordered', 
}


function BaseInput({value, onChange}:Props) {
  return <input type="text" name='query' className="base-input" value={value} onChange={onChange}/>
}

function BorderedInput({value, onChange}:Props) {
  return <input type="text" name='query' className="base-input bordered" defaultValue={value} onChange={onChange}/>
}

function TextInput({ type,value, onChange }: InputTypes) {
  if (type == InputEnums.BASE) return <BaseInput value={value} onChange={onChange}/>
  else if (type == InputEnums.BORDERED) return <BorderedInput value={value}  onChange={onChange}/>
  return 
}

export default TextInput
