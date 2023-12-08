import './NewsStyles.scss'
// interface NewsProps {}
import SlideImage from '../../assets/street.png'
import Slider from '../Slider/Slider'
const slides = [
  {
    index:0,
    image: SlideImage,
    text: 'A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
    updatedBy: '1h ago · by Troy Corlson',
  },
  {
    index:1,
    image: SlideImage,
    text: 'A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
    updatedBy: '1h ago · by Troy Corlson',
  },
  {
    index:2,
    image: SlideImage,
    text: 'A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
    updatedBy: '1h ago · by Troy Corlson',
  },
  {
    index:3,
    image: SlideImage,
    text: 'A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
    updatedBy: '1h ago · by Troy Corlson',
  },
]

function News() {
  return (
    <div>
      <div>
        <Slider slides={slides}></Slider>
      </div>
    </div>
  )
}

export default News
