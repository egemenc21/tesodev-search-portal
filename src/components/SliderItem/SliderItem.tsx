import './SliderItemStyles.scss'
interface SliderItemProps {
  slide: {
    index: number
    image: string
    text: string
    updatedBy: string
  }
}

function SliderItem({ slide }: SliderItemProps) {
  const { image, text, updatedBy } = slide
  return (
    <div className="slider-item-container">
      <img src={image} alt="street image" />
      <p>{text}</p>
      <div>{updatedBy}</div>
    </div>
  )
}

export default SliderItem
