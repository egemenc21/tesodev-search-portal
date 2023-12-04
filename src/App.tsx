import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home'
import AddLink from './pages/AddLink'
import Search from './pages/Search'

function App() {

  return (    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/search/" element={<Search/>}/>
      <Route path="/add-link/" element={<AddLink/>}/>
    </Routes> 
  )
}

export default App
