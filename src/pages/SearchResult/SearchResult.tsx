import '../SearchPreview/SearchStyles.scss'
import TesoDevLogo from '../../assets/logo.png'
import TextInput, { InputEnums } from '../../components/TextInput/TextInput'
import Button from '../../components/Button/Button'
import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Results from '../../components/Results/Results'

import { QueryContext } from '../../context/Query'
import { RecordsContext } from '../../context/Records'
import { OrderContext } from '../../context/Order'
import { RecordType } from '../Home/Home'
type RouteParams = {
  slug: string
}
function SearchResult() {
  const { slug } = useParams<RouteParams>() as RouteParams
  const [records, setRecords] = useState<RecordType[]>([])
  const navigate = useNavigate()
  const { query, setQuery } = useContext(QueryContext)
  const { setFilteredRecords } = useContext(RecordsContext)
  const { setSelectedOrder } = useContext(OrderContext)

  //if page is routed
  useEffect(() => {
    const allRecords = localStorage.getItem('records')
    if (allRecords && slug) {
      const records: RecordType[] = JSON.parse(allRecords)

      setRecords(records)
      const filteredRecords = records.filter((record) =>
        record.nameSurname.toLowerCase().includes(slug)
      )
      setFilteredRecords(filteredRecords)
    }
    setSelectedOrder('')
  }, [slug])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setQuery(value)
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (query) {
      const filteredRecords = records.filter((record) =>
        record.nameSurname.toLowerCase().includes(query)
      )
      setFilteredRecords(filteredRecords)
    }
    navigate(`/search/${query}`)
    setSelectedOrder('')
  }
  if (!slug) return
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
            onChange={handleChange}
          />
          <Button>Search</Button>
        </form>
        <Link to="/add-link/">
          <Button className="new-record">Add new record</Button>
        </Link>
      </nav>
      <Results />
    </section>
  )
}

export default SearchResult
