import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import api from 'api'
import getSingleBadge from 'services/getSingleBadge'
import removeSingleBadge from 'services/removeSingleBadge'

import './index.css'
import confLogo from 'images/platziconf-logo.svg'
import Badge from 'components/Badge'
import DeleteBadgeModal from 'components/DeleteBadgeModal'
import Loader from 'components/Loader'

export default function BadgeDetails ({ match, history }) {
  const [data, setData] = useState({})
  const [state, setState] = useState({ loading: true, error: null })
  const [modal, setModal] = useState(false)

  const { firstName, lastName, id } = data
  const badgeId = match.params.badgeId

  useEffect(() => {
    getSingleBadge({ badgeId, setState, setData })
  }, [badgeId])

  const handleOpenModal = () => setModal(true)
  const handleCloseModal = () => setModal(false)
  const handleDeleteBadge = () => removeSingleBadge({ setState, badgeId, history })

  if (state.loading) {
    return <Loader />
  }

  return (
    <>
      <div className='BadgeDetails__hero '>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <img src={confLogo} alt='Logo de la Conferencia' />
            </div>
            <div className='col-6 BadgeDetails__hero-attendant-name'>
              <h1>
                {firstName} {lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Badge dataUser={data} />
          </div>
          <div className='col'>
            <h2>Actions</h2>
            <div>
              <Link className='btn btn-primary mb-4' to={`/badges/${id}/edit`}>Edit</Link>
            </div>
            <>
              <button onClick={handleOpenModal} className='btn btn-danger'>Delete</button>
              <DeleteBadgeModal onDeleteBadge={handleDeleteBadge} isOpen={modal} onClose={handleCloseModal}>Lorem ipsum</DeleteBadgeModal>
            </>
          </div>
        </div>
      </div>
    </>
  )
}
