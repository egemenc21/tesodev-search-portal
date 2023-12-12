import './SearchStyles.scss'
import TesoDevLogo from '../../assets/logo.png'
import TextInput, { InputEnums } from '../../components/TextInput/TextInput'
import Button from '../../components/Button/Button'
import { useContext, useEffect, useState } from 'react'

import { Link, useNavigate, useParams } from 'react-router-dom'
import Results from '../../components/Results/Results'
import { RecordType } from '../Home/Home'
import { QueryContext } from '../../context/Query'
import { RecordsContext } from '../../context/Records'

function Search() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [records, setRecords] = useState<RecordType[]>([])
  const { setQuery } = useContext(QueryContext)
  const { filteredRecords, setFilteredRecords } = useContext(RecordsContext)


  //use memoya bak
  useEffect(() => {
    const allRecords = localStorage.getItem('records')

    if (allRecords && slug) {
      const records: RecordType[] = JSON.parse(allRecords)

      if (filteredRecords.length === 0) {
        const filteredResults: RecordType[] = records.filter((record) =>
          record.nameSurname.toLowerCase().includes(slug)
        )
        setFilteredRecords(filteredResults)
      }
      setRecords(records)
    }
  }, [setFilteredRecords, slug, filteredRecords])

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const queryInput = form.querySelector('input')

    if (queryInput) {
      const query = queryInput.value.toLowerCase()
      console.log(query)
      setQuery(query)

      const filteredRecords = records.filter((record) =>
        record.nameSurname.toLowerCase().includes(query)
      )
      setFilteredRecords(filteredRecords)
      navigate(`/search/${query}`)
    }
  }
  if (!slug) return

  return (
    <section>
      <nav className="search-navigation">
        <Link to="/">
          <img src={TesoDevLogo} alt="Tesodev Logo" />
        </Link>
        <form className="search-area" onSubmit={handleSubmit}>
          <TextInput type={InputEnums.BORDERED} value={slug} />
          <Button>Search</Button>
        </form>
        <Button className="new-record">Add new record</Button>
      </nav>
      <Results />
    </section>
  )
}

export default Search
