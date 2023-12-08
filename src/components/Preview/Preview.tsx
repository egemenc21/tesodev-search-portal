import { useNavigate } from 'react-router-dom'
import { RecordType } from '../../pages/Home/Home'
import PreviewItem from '../PreviewItem/PreviewItem'

import './PreviewStyles.scss'
interface PreviewProps {
  filteredData: RecordType[]
}



function Preview({ filteredData }: PreviewProps) {
  const navigate = useNavigate()
  function onClick(){
    navigate('/search/')
  }
  console.log(filteredData)
  if (filteredData.length === 1000 || filteredData.length === 0) return
  return (
    <div className="previews-container">
      {filteredData
        .map(({ id, nameSurname, company, country }) => (
          <PreviewItem            
            key={id}
            nameSurname={nameSurname}
            company={company}
            country={country}
          />
        ))
        .slice(0, 3)}
        <button onClick={onClick}>Show more...</button>
    </div>
  )
}

export default Preview
