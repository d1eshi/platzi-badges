import { Link } from 'react-router-dom'

import './index.css'
import Logo from 'images/logo.svg'

export default function NavBar () {
  return (
    <div className='Navbar'>
      <div className='container-fluid'>
        <Link className='Navbar__brand' to='/'>
          <img className='Navbar__brand-logo' src={Logo} alt='Logo de la conferencia' />
          <span className='fw-light'>Platzi</span>
          <span className='fw-bold'>Conf</span>
        </Link>
      </div>
    </div>
  )
}
