import { Dispatch, SetStateAction, createContext, useState } from 'react'

interface OrderContextProps {
  selectedOrder:string
  setSelectedOrder: Dispatch<SetStateAction<string>>, 
}

export const OrderContext = createContext<OrderContextProps>({
  selectedOrder:'',
  setSelectedOrder: () => {},

})

function OrderProvider({ children }: { children: React.ReactNode }) {
  const [selectedOrder, setSelectedOrder] = useState('')

  return (
    <OrderContext.Provider value={{ selectedOrder, setSelectedOrder}}>
      {children}
    </OrderContext.Provider>
  )
}

export default OrderProvider
