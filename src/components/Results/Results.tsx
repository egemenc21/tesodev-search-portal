import './ResultsStyles.scss'
import ResultItem from '../ResultItem/ResultItem'
import { useContext } from 'react'
import OrderBy from '../OrderBy/OrderBy'
import { RecordsContext } from '../../context/Records'

function Results() {
  const { filteredRecords } = useContext(RecordsContext)
  
  return (
    <div className="results-container">
      <div className="results">
        {filteredRecords.map((record, index) => (
          <ResultItem
            record={record}
            key={record.id}
            index={index}  
            length={filteredRecords.length}          
          />
        ))}
      </div>
      <OrderBy />
    </div>
  )
}

export default Results
