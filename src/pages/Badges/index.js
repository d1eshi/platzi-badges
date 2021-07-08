import { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'

import api from 'api'

import './index.css'

import confLogo from 'images/badge-header.svg'
import BadgesList from 'components/BadgesList'
import Loader from 'components/Loader'
import PageError from 'components/PageError'

export default function Test () {
  const [state, setState] = useState({
    loading: true,
    error: null
  })

  const [data, setData] = useState({})

  const listAPI = useCallback(async () => {
    try {
      const data = await api.badges.list()
      setData(data)
      setState({ loading: false })
    } catch (err) {
      setState({ loading: false, error: err.message })
    }
  }, [])

  useEffect(() => {
    listAPI()
  }, [listAPI])

  if (state.loading) {
    return <Loader />
  }

  if (state.error) {
    return <PageError error={state.error} />
  }
  return (
    <>
      <div className='Badges'>
        <div className='Badges__hero'>
          <div className='Badges__container'>
            <img
              className='Badges_conf-logo'
              src={confLogo}
              alt='Conf Logo'
            />
          </div>
        </div>
      </div>

      <div className='Badges__container'>
        <div className='Badges__buttons'>
          <Link to='/badges/new' className='btn btn-primary'>
            New Badge
          </Link>
        </div>

        <BadgesList badges={data} />
      </div>
    </>
  )
}
