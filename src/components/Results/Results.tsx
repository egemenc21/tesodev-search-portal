
import './ResultsStyles.scss'
import { RecordType } from '../../pages/Home/Home';
interface ResultsProps {
  filteredResults:RecordType[]
}

function Results({filteredResults}:ResultsProps) {
  
  return <div> {filteredResults.map((result)=> result.nameSurname)} </div>
}

export default Results;