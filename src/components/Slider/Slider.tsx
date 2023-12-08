import { useState } from 'react'
import './SliderStyles.scss'
import SliderItem from '../SliderItem/SliderItem'
import LeftArrow from '../../assets/LeftArrow'
import RightArrow from '../../assets/RightArrow'
interface SliderProps {
  slides: { index: number; image: string; text: string; updatedBy: string }[]
}

function Slider({ slides }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % slides.length
    setCurrentIndex(newIndex)
  }

  const calculateVisibleSlides = () => {
    const firstIndex = (currentIndex + slides.length - 1) % slides.length
    const secondIndex = currentIndex
    const thirdIndex = (currentIndex + 1) % slides.length

    return [slides[firstIndex], slides[secondIndex], slides[thirdIndex]]
  }

  const visibleSlides = calculateVisibleSlides()

  return (
    <div className="slider-container">
      <div onClick={goToPrevious} className="back">
        <LeftArrow />
      </div>
      
        {visibleSlides.map((slide) => (
          <SliderItem index={slide.index} slide={slide} />
        ))}
      

      <div onClick={goToNext} className="forward">
        <RightArrow />
      </div>
    </div>
  )
}

export default Slider
