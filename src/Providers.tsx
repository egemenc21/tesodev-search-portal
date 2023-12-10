import { BrowserRouter } from 'react-router-dom'
import QueryProvider from './context/Query'

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <BrowserRouter>
      <QueryProvider>{children}</QueryProvider>
    </BrowserRouter>
  )
}

export default Providers
