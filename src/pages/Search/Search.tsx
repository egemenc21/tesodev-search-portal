import './SearchStyles.scss'
import TesoDevLogo from '../../assets/logo.png'
import TextInput, { InputEnums } from '../../components/TextInput/TextInput'
import Button from '../../components/Button/Button'
import { useContext, useEffect, useState } from 'react'
import { QueryContext } from '../../context/Query'
import { Link } from 'react-router-dom'
import Results from '../../components/Results/Results'
import { RecordType } from '../Home/Home'

function Search() {
  const { query, setQuery } = useContext(QueryContext)
  const [filteredResults, setFilteredResults] = useState<RecordType[]>([])
  const [records, setRecords] = useState<RecordType[]>([])
  useEffect(() => {
    const allRecords = localStorage.getItem('records')
    const filteredResults = localStorage.getItem('results')

    if (allRecords && filteredResults) {
      setFilteredResults(JSON.parse(filteredResults))
      setRecords(JSON.parse(allRecords))
    }
  }, [])
  console.log(filteredResults)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value.toLowerCase()
    setQuery(userInput)
    const filteredResults = records.filter((record) =>
      record.nameSurname.toLowerCase().includes(userInput)
    )
    setFilteredResults(filteredResults)
  }

  return (
    <section>
      <nav className="search-navigation">
        <Link to="/">
          <img src={TesoDevLogo} alt="Tesodev Logo" />
        </Link>
        <div className="search-area">
          <TextInput
            type={InputEnums.BORDERED}
            value={query}
            onChange={onChange}
          />
          <Button>Search</Button>
        </div>
        <Button className="new-record">Add new record</Button>
      </nav>
      <Results filteredResults={filteredResults}/>
    </section>
  )
}

export default Search
