import { useContext } from 'react'
import './OrderByItemStyles.scss'
import { RecordsContext } from '../../context/Records'
import cn from 'classnames'

interface OrderByItemProps {
  orderName: string
  isSelected:boolean
  onClick: (orderName: string) => void;
}

function OrderByItem({ orderName,isSelected, onClick }: OrderByItemProps) {

  const { orderByNameAsc, orderByNameDesc, orderByDateAsc, orderByDateDesc } =
    useContext(RecordsContext)

  const handleOnClick = () => {
    onClick(orderName)
    
    switch (orderName) {
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
  }
  return <li onClick={handleOnClick} className={cn('order-list',{'selected': isSelected})}>
    {orderName}</li>
}

export default OrderByItem
