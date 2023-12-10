import './NewsStyles.scss'
// interface NewsProps {}
import SlideImage from '../../assets/street.png'
import Slider from '../Slider/Slider'
import LargeTitle from '../LargeTitle/LargeTitle'
const slides = [
  {
    index:0,
    image: SlideImage,
    text: 'A Plan to Rebuild the Bus Terminal Everyone Loves to Hate -0',
    updatedBy: '1h ago · by Troy Corlson',
  },
  {
    index:1,
    image: SlideImage,
    text: 'A Plan to Rebuild the Bus Terminal Everyone Loves to Hate -1',
    updatedBy: '1h ago · by Troy Corlson',
  },
  {
    index:2,
    image: SlideImage,
    text: 'A Plan to Rebuild the Bus Terminal Everyone Loves to Hate -2',
    updatedBy: '1h ago · by Troy Corlson',
  },
  {
    index:3,
    image: SlideImage,
    text: 'A Plan to Rebuild the Bus Terminal Everyone Loves to Hate -3',
    updatedBy: '1h ago · by Troy Corlson',
  },
]

function News() {
  return (
    <div className='news-container'>
      <div>
        <LargeTitle>Top News</LargeTitle>
        <Slider slides={slides}></Slider>
      </div>
    </div>
  )
}

export default News
