import LogoConf from 'images/platziconf-logo.svg'
import Astronauts from 'images/astronauts.svg'

import { Link } from 'react-router-dom'

import './index.css'

export default function Home () {
  return (
    <div className='home'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <img className='img-fluid logo-conf' src={LogoConf} alt='logo de la conferencia de la PlatziConf' />
            <h2 className='text-white'>PRINT YOUR BADGES</h2>
            <p className='text-white'>The easiest way to mange your conference</p>
            <div className='container-art'>
              <Link className='btn btn-primary text-center' to='/badges/new'>Start now</Link>
            </div>
          </div>
          <div className='col-8'>
            <img className='img-fluid' src={Astronauts} alt='imagen de astronautas animado' />
          </div>
        </div>
      </div>
    </div>
  )
}
