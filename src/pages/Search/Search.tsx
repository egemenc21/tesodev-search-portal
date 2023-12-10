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
  // const { slug } = useParams()
  const { query, setQuery } = useContext(QueryContext)
  const [records, setRecords] = useState<RecordType[]>([])
  const [filteredRecords, setFilteredRecords] = useState<RecordType[]>([])

  useEffect(() => {
    const allRecords = localStorage.getItem('records')
    const filteredRecords = localStorage.getItem('results')

    if (allRecords && filteredRecords) {
      setRecords(JSON.parse(allRecords))
      setFilteredRecords(JSON.parse(filteredRecords))
      
    }
  }, [])
  
  console.log({filteredRecords,records})

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value.toLowerCase()
    setQuery(userInput)    
  }
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    const filteredRecords = records.filter((record) =>
      record.nameSurname.toLowerCase().includes(query)
    )
    setFilteredRecords(filteredRecords)
  }

  return (
    <section>
      <nav className="search-navigation">
        <Link to="/">
          <img src={TesoDevLogo} alt="Tesodev Logo" />
        </Link>
        <form className="search-area" onSubmit={handleSubmit}>
          <TextInput
            type={InputEnums.BORDERED}
            value={query}
            onChange={onChange}
          />
          <Button>Search</Button>
        </form>
        <Button className="new-record">Add new record</Button>
      </nav>
      <Results filteredRecords={filteredRecords}/>
    </section>
  )
}

export default Search
