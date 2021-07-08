import ConfLogo from 'images/badge-header.svg'
import Gravatar from 'components/Gravatar'
import './index.css'

export default function Badge ({ dataUser }) {
  const { firstName, lastName, email, jobTitle, twitter } = dataUser

  return (

    <div className='Badge'>
      <div className='Badge__header'>
        <img src={ConfLogo} alt='Logo de la conferencia' />
      </div>

      <div className='Badge__section-name'>
        {!email
          ? null
          : <Gravatar
              className='Badge__avatar' emailUser={email}
            />}
        <h1>{firstName} <br /> {lastName}</h1>
      </div>

      <div className='Badge__section-info'>
        <h3>{jobTitle}</h3>
        <div>@{twitter}</div>
      </div>

      <div className='Badge__footer'>
        #platziconf
      </div>

    </div>
  )
}
