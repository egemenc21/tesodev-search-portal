import './HomeStyles.scss'
import Button from '../../components/Button/Button'
import Input, { InputEnums } from '../../components/TextInput/TextInput'
import { Link } from 'react-router-dom'
import SearchIcon from '../../assets/SearchIcon'
import LargeTitle from '../../components/LargeTitle/LargeTitle'

function Home() {
  return (
    <section className="home-container">
      <LargeTitle>Find in Records</LargeTitle>
      <div className='search-area'>        
        <label>
          <SearchIcon/>
          <Input type={InputEnums.BASE}/>
        </label>
        <Link to="/add-link/">
          <Button>Search</Button>
        </Link>
      </div>
    </section>
  )
}

export default Home
