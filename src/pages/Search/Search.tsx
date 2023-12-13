import { Route, Routes } from 'react-router-dom'
import './SearchStyles.scss'
import SearchPreview from '../SearchPreview/SearchPreview'
import SearchResult from '../SearchResult/SearchResult'


function Search() {
  return (
    <Routes>
      <Route index element={<SearchPreview />} />
      <Route path=':slug/*' element ={<SearchResult/>}/>
    </Routes>
  )
}

export default Search
