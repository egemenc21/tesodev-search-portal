import { useNavigate } from 'react-router-dom'
import { RecordType } from '../../pages/Home/Home'
import PreviewItem from '../PreviewItem/PreviewItem'

import './PreviewStyles.scss'
// import { useContext } from 'react'
// import { QueryContext } from '../../context/Query'
interface PreviewProps {
  filteredRecords: RecordType[]
}



function Preview({ filteredRecords }: PreviewProps) {
  const navigate = useNavigate()
  // const {query} = useContext(QueryContext)
  function onClick(){
    //slug buraya gelmeli
    navigate(`/search/`)
  }
  console.log(filteredRecords)
  if (filteredRecords.length === 1000 || filteredRecords.length === 0) return
  return (
    <div className="previews-container">
      {filteredRecords
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
