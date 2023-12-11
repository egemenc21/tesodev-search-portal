import { Dispatch, SetStateAction, createContext, useState } from 'react'
import { RecordType } from '../pages/Home/Home'

interface RecordsContextProps {
  filteredRecords: RecordType[]
  setFilteredRecords: Dispatch<SetStateAction<RecordType[]>>
  orderByNameAsc: () => void
  orderByNameDesc: () => void
  orderByDateAsc: () => void
  orderByDateDesc: () => void
}

export const RecordsContext = createContext<RecordsContextProps>({
  filteredRecords: [],
  setFilteredRecords: () => {},
  orderByNameAsc: () => {},
  orderByNameDesc: () => {},
  orderByDateAsc: () => {},
  orderByDateDesc: () => {},
})

function sortByNameAsc(records: RecordType[]): RecordType[] {
  return records
    .slice()
    .sort((a, b) => a.nameSurname.localeCompare(b.nameSurname))
}

function sortByNameDesc(records: RecordType[]): RecordType[] {
  return records
    .slice()
    .sort((a, b) => b.nameSurname.localeCompare(a.nameSurname))
}

function sortByDateAsc(records: RecordType[]): RecordType[] {
  return records.slice().sort((a, b) => a.date.localeCompare(b.date))
}

function sortByDateDesc(records: RecordType[]): RecordType[] {
  return records.slice().sort((a, b) => b.date.localeCompare(a.date))
}

function RecordsProvider({ children }: { children: React.ReactNode }) {
  const [filteredRecords, setFilteredRecords] = useState<RecordType[]>([])

  //selectors
  const orderByNameAsc = () => {
    setFilteredRecords(sortByNameAsc(filteredRecords))
  }
  const orderByNameDesc = () => {
    setFilteredRecords(sortByNameDesc(filteredRecords))
  }
  const orderByDateAsc = () => {
    setFilteredRecords(sortByDateAsc(filteredRecords))
  }
  const orderByDateDesc = () => {
    setFilteredRecords(sortByDateDesc(filteredRecords))
  }

  return (
    <RecordsContext.Provider
      value={{
        filteredRecords,
        setFilteredRecords,
        orderByNameAsc,
        orderByNameDesc,
        orderByDateAsc,
        orderByDateDesc,
      }}
    >
      {children}
    </RecordsContext.Provider>
  )
}

export default RecordsProvider
