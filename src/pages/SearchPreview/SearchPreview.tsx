import './SearchStyles.scss'
import TesoDevLogo from '../../assets/logo.png'
import TextInput, { InputEnums } from '../../components/TextInput/TextInput'
import Button from '../../components/Button/Button'
import { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Results from '../../components/Results/Results'
import { RecordType } from '../Home/Home'
import { QueryContext } from '../../context/Query'
import { RecordsContext } from '../../context/Records'
import { OrderContext } from '../../context/Order'

// interface SearchPreviewProps {}

function SearchPreview() {
  const navigate = useNavigate()
  const { query, setQuery } = useContext(QueryContext)
  const { setFilteredRecords } = useContext(RecordsContext)
  const { setSelectedOrder } = useContext(OrderContext)

  //use memoya bak
  useEffect(() => {
    const allRecords = localStorage.getItem('records')

    if (allRecords) {
      const records: RecordType[] = JSON.parse(allRecords)
      setFilteredRecords(records)
    }

    setSelectedOrder('')
  }, [setFilteredRecords, setSelectedOrder, setFilteredRecords])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setQuery(value)
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate(`/search/${query}`)
    setSelectedOrder('')
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

export default SearchPreview
