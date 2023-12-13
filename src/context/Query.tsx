import { Dispatch, SetStateAction, createContext, useState } from 'react'

interface QueryContextProps {
  query: string
  setQuery: Dispatch<SetStateAction<string>>, 
  isOrdered:string
  setIsOrdered: Dispatch<SetStateAction<string>>, 
}

export const QueryContext = createContext<QueryContextProps>({
  query: '',
  setQuery: () => {},
  isOrdered:'',
  setIsOrdered: () => {},

})

function QueryProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState('')
  const [isOrdered, setIsOrdered] = useState('')

  return (
    <QueryContext.Provider value={{ query, setQuery, isOrdered, setIsOrdered}}>
      {children}
    </QueryContext.Provider>
  )
}

export default QueryProvider
