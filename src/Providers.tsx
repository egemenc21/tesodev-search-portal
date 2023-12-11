import { BrowserRouter } from 'react-router-dom'
import QueryProvider from './context/Query'
import RecordsProvider from './context/Records'

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <BrowserRouter>
      <RecordsProvider>
        <QueryProvider>{children}</QueryProvider>
      </RecordsProvider>
    </BrowserRouter>
  )
}

export default Providers
