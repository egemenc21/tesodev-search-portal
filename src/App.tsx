import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home/Home'
import AddLink from './pages/AddLink/AddLink'
import Search from './pages/Search/Search'

function App() {

  return (    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/search/:slug" element={<Search/>}/>
      <Route path="/add-link/" element={<AddLink/>}/>
    </Routes> 
  )
}

export default App
