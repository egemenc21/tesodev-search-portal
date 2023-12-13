import { Dispatch, SetStateAction, createContext, useState } from 'react'
import { RecordType } from '../pages/Home/Home'

interface RecordsContextProps {
  filteredRecords: RecordType[]
  setFilteredRecords: Dispatch<SetStateAction<RecordType[]>>
  orderByNameAsc: () => void
  orderByNameDesc: () => void
  orderByDateAsc: () => void
  orderByDateDesc: () => void
  addNewRecord: (record:RecordType) => RecordType[]
}

export const RecordsContext = createContext<RecordsContextProps>({
  filteredRecords: [],
  setFilteredRecords: () => {},
  orderByNameAsc: () => {},
  orderByNameDesc: () => {},
  orderByDateAsc: () => {},
  orderByDateDesc: () => {},
  addNewRecord: () => [],
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
  return records.slice().sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateA.getTime() - dateB.getTime();
  });
}


function sortByDateDesc(records: RecordType[]): RecordType[] {
  return records.slice().sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime()})
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

  const addNewRecord = (record: RecordType) => {
    filteredRecords.push(record)
    return filteredRecords
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
        addNewRecord,
      }}
    >
      {children}
    </RecordsContext.Provider>
  )
}

export default RecordsProvider
