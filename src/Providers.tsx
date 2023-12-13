import { BrowserRouter } from 'react-router-dom'
import QueryProvider from './context/Query'
import RecordsProvider from './context/Records'
import OrderProvider from './context/Order'
import { ToastContainer } from 'react-toastify'

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <BrowserRouter>
      <RecordsProvider>
        <QueryProvider>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <OrderProvider>{children}</OrderProvider>
        </QueryProvider>
      </RecordsProvider>
    </BrowserRouter>
  )
}

export default Providers
