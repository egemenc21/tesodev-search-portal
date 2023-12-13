import './OrderByItemStyles.scss'
import cn from 'classnames'

interface OrderByItemProps {
  orderName: string
  isSelected: boolean
  onClick: (orderName: string) => void
}

function OrderByItem({ orderName, isSelected, onClick }: OrderByItemProps) {

  const handleOnClick = () => {
    onClick(orderName)
  }
  return (
    <li
      onClick={handleOnClick}
      className={cn('order-list', { selected: isSelected })}
    >
      {orderName}
    </li>
  )
}

export default OrderByItem
