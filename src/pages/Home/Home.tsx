import './HomeStyles.scss'
import Button from '../../components/Button/Button'
import Input, { InputEnums } from '../../components/TextInput/TextInput'
import { Link } from 'react-router-dom'
import SearchIcon from '../../assets/SearchIcon'

function Home() {
  return (
    <section className="home-container">
      <div className='search-area'>        
        <label>
          <SearchIcon/>
          <Input type={InputEnums.BASE}/>
        </label>
        <Input type={InputEnums.BORDERED}/>
        <Link to="/add-link/">
          <Button>Add New Record</Button>
        </Link>
      </div>
    </section>
  )
}

export default Home
