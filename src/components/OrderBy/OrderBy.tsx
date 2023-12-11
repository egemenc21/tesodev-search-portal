import { useState } from 'react'
import './OrderByStyles.scss'
import OrderByItem from '../OrderByItem/OrderByItem'
// interface OrderByProps {}

const orderNames = [
  'Name ascending',
  'Name descending',
  'Date ascending',
  'Date descending',
]

function OrderBy() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState('');

  const handleOnClick = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  const handleOrderClick = (orderName:string) => {
    setSelectedOrder(orderName);
  };

  

  return (
    <div className='order-by-container'>
      <button onClick={handleOnClick} className="order-by-btn">
        Order by
      </button>
      {isOpen && (
        <ul className="order-by">
          {orderNames.map((name) => (
            <OrderByItem orderName={name} isSelected={selectedOrder === name} onClick={handleOrderClick}/>
          ))}
        </ul>
      )}
    </div>
  )
}

export default OrderBy
