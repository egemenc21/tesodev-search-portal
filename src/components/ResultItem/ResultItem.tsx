import { RecordType } from '../../pages/Home/Home'
import './ResultItemStyles.scss'
interface ResultItemProps {
  record: RecordType
  length: number
  index: number
}

function ResultItem({ record, index, length }: ResultItemProps) {
  const { nameSurname, company, email, phone, website, country, city, date } =
    record

  return (
    <div>
      <div className="result">
        <div>
          <div>{nameSurname}</div>
          <div>{email}</div>
        </div>
        <div>
          <div>{website}</div>
          <div>{phone}</div>
        </div>
        <div className="location">
          <div>
            {company}, {city}, {country}
          </div>
          <div>{date}</div>
        </div>
      </div>
      {length - 1 === index ? null : (
        <div className="border-bottom"/>
      )}
    </div>
  )
}

export default ResultItem
