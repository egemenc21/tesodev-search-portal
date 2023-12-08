import './HomeStyles.scss'
import Button from '../../components/Button/Button'
import Input, { InputEnums } from '../../components/TextInput/TextInput'
import { Link } from 'react-router-dom'
import SearchIcon from '../../assets/SearchIcon'
import LargeTitle from '../../components/LargeTitle/LargeTitle'
import HomeNavigation from '../../components/HomeNavigation/HomeNavigation'
import mockData from '../../db/mock-data.json'
import { useEffect, useState } from 'react'
import Preview from '../../components/Preview/Preview'

interface DataStructure {
  cols: string[];
  data: Array<Array<string | number>>;
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
  [key: string]: string | number;
}

function Home() {
  const [query, setQuery] = useState('')
  const data:DataStructure = mockData
  const [records, setRecords] = useState<RecordType[]>([]);
  const [filteredData, setFilteredData] = useState<RecordType[]>([]);

  useEffect(() => {
    if (data) {
      const recordsArray: RecordType[] = data.data.map(row =>
        row.reduce((acc, value, index) => {
          acc[data.cols[index]] = value;
          return acc;
        }, {} as RecordType)
      );
      setRecords(recordsArray);

      console.log({records})
    }
  }, [data]);  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value.toLowerCase()
    setQuery(userInput)
    
    const filteredResults = records.filter(record => record.nameSurname.toLowerCase().includes(userInput))
    setFilteredData(filteredResults)
    console.log(userInput, filteredResults)
  }
  console.log(query)

  return (
    <section className="home-container">
      <HomeNavigation />
      <LargeTitle>Find in Records</LargeTitle>
      <div className="search-area">
        <label>
          <SearchIcon />
          <Input type={InputEnums.BASE} onChange={handleChange} value={query} />
        </label>
        <Link to="/search/">
          <Button>Search</Button>
        </Link>
      </div>
      {
        query === '' ? null : <Preview filteredData={filteredData}/>
      }
      

    </section>
  )
}

export default Home
