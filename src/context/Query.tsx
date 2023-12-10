import { Dispatch, SetStateAction, createContext, useState } from 'react'

interface QueryContextProps {
  query: string
  setQuery: Dispatch<SetStateAction<string>>
}

export const QueryContext = createContext<QueryContextProps>({
  query: '',
  setQuery: () => {},
})

function QueryProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState('')

  return (
    <QueryContext.Provider value={{ query, setQuery }}>
      {children}
    </QueryContext.Provider>
  )
}

export default QueryProvider
