// interface HomeNavigationProps {}
import { Link } from 'react-router-dom'
import TesodevLogo from '../../assets/logo.png'
import Button from '../Button/Button'
import './HomeNavigationStyles.scss'

function HomeNavigation() {
  return (
    <nav className="navigation-container">
      <div>
        <Link to='/add-link/'>
          <Button>Add new record</Button>
        </Link>
      </div>
      <img src={TesodevLogo} alt="Tesodev" />
    </nav>
  )
}

export default HomeNavigation
