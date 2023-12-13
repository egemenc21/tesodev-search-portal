import { useContext, useEffect, useState } from 'react'
import './OrderByStyles.scss'
import OrderByItem from '../OrderByItem/OrderByItem'
import { RecordsContext } from '../../context/Records'
import { OrderContext } from '../../context/Order'

// import { OrderContext } from '../../context/Order'
// interface OrderByProps {}

const orderNames = [
  'Name ascending',
  'Name descending',
  'Date ascending',
  'Date descending',
]

function OrderBy() {
  const [isOpen, setIsOpen] = useState(false)
  // const [selectedOrder, setSelectedOrder] = useState('')
  const {selectedOrder, setSelectedOrder} = useContext(OrderContext)

  const { orderByNameAsc, orderByNameDesc, orderByDateAsc, orderByDateDesc } =
    useContext(RecordsContext)

  useEffect(() => {  

    switch (selectedOrder) {
      case 'Name ascending':
        orderByNameAsc()
        break
      case 'Name descending':
        orderByNameDesc()   
        break
      case 'Date ascending':
        orderByDateAsc()
        break
      case 'Date descending':
        orderByDateDesc()
        break
      default:
        break
    }
  }, [selectedOrder])

  const handleOnClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOrderClick = (orderName: string) => {
    setSelectedOrder(orderName)
  }

  return (
    <div className="order-by-container">
      <button onClick={handleOnClick} className="order-by-btn">
        Order by
      </button>
      {isOpen && (
        <ul className="order-by">
          {orderNames.map((name) => (
            <OrderByItem
              orderName={name}
              isSelected={selectedOrder === name}
              onClick={handleOrderClick}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default OrderBy
