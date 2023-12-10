import './ResultsStyles.scss'
import { RecordType } from '../../pages/Home/Home'
import ResultItem from '../ResultItem/ResultItem'
interface ResultsProps {
  filteredRecords: RecordType[]
}

function Results({ filteredRecords }: ResultsProps) {
  return (
    <div className="results">      
      {filteredRecords.map((record, index) => (
        <ResultItem
          record={record}
          key={record.id}
          index={index}
          filteredRecords={filteredRecords}
        />
      ))}
    </div>
  )
}

export default Results
