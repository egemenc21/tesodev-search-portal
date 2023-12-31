import './HomeStyles.scss'
import Button from '../../components/Button/Button'
import Input, { InputEnums } from '../../components/TextInput/TextInput'
import { Link } from 'react-router-dom'
import SearchIcon from '../../assets/SearchIcon'
import LargeTitle from '../../components/LargeTitle/LargeTitle'
import HomeNavigation from '../../components/HomeNavigation/HomeNavigation'
import mockData from '../../db/mock-data.json'
import { useContext, useEffect, useState } from 'react'
import Preview from '../../components/Preview/Preview'
import News from '../../components/News/News'
import Footer from '../../components/Footer/Footer'
import { QueryContext } from '../../context/Query'
import { RecordsContext } from '../../context/Records'

interface DataStructure {
  cols: string[]
  data: Array<Array<string | number>>
}

export interface RecordType {
  id: string
  nameSurname: string
  company: string
  email: string
  phone: string
  website: string
  country: string
  city: string
  date: string
  [key: string]: string | number
}

function Home() {
  const data: DataStructure = mockData
  const { query, setQuery } = useContext(QueryContext)
  const { filteredRecords, setFilteredRecords } = useContext(RecordsContext)

  const [records, setRecords] = useState<RecordType[]>([])

  //use memoya bak
  useEffect(() => {
    const response = localStorage.getItem('records')
    if(response)
    setRecords(JSON.parse(response))
  
    if (!records && data) {
      const recordsArray: RecordType[] = data.data.map((row) =>
        row.reduce((acc, value, index) => {
          acc[data.cols[index]] = value
          return acc
        }, {} as RecordType)
      )
      setRecords(recordsArray)
      localStorage.setItem('records', JSON.stringify(recordsArray))
    }

  }, [data])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value.toLowerCase()
    setQuery(userInput)

    const filteredResults = records.filter((record) =>
      record.nameSurname.toLowerCase().includes(userInput)
    )
    setFilteredRecords(filteredResults)


  }


  return (
    <section className="home-container">
      <HomeNavigation />
      <LargeTitle>Find in Records</LargeTitle>
      <div className="search-area">
        <label>
          <SearchIcon />
          <Input type={InputEnums.BASE} onChange={handleChange} value={query} />
        </label>
        <Link to={`/search/${query}`}>
          <Button>Search</Button>
        </Link>
      </div>
      {query === '' ? (
        <div className="filler"></div>
      ) : (
        <Preview filteredRecords={filteredRecords} />
      )}
      <News />
      <Footer />
    </section>
  )
}

export default Home
