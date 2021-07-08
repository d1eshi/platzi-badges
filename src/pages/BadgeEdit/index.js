import { useState, useCallback, useEffect } from 'react'

import api from 'api'

import Badge from 'components/Badge'
import BadgeForm from 'components/BadgeForm'
import Header from 'images/platziconf-logo.svg'
import Loader from 'components/Loader'
import PageError from 'components/PageError'

export default function BadgeEdit ({ history, match }) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: ''
  })
  const [state, setState] = useState({ loading: true, error: null })

  const BadgeId = match.params.badgeId

  const listAPI = useCallback(async () => {
    try {
      const data = await api.badges.read(BadgeId)
      setForm(data)
      setState({ loading: false })
    } catch (err) {
      setState({ loading: false, error: err.message })
    }
  }, [BadgeId])

  useEffect(() => {
    listAPI()
  }, [listAPI])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    console.log('enviando')

    try {
      await api.badges.update(BadgeId, form)
      setState({ loading: false })

      history.push('/badges')
    } catch (err) {
      setState({ loading: false, error: err.message })
    }
  }

  if (state.loading) {
    return <Loader />
  }

  if (state.error) {
    <PageError />
  }

  return (
    <div>
      <div className='Badge__hero'>
        <img src={Header} alt='Logo de la conferencia' className='Badge__hero-img img-fluid' />
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Badge dataUser={form} />
          </div>
          <div className='col-6'>
            <h1>Edit Attendat</h1>
            <BadgeForm onSubmit={handleSubmit} onChange={handleChange} formValues={form} />
          </div>
        </div>
      </div>
    </div>
  )
}
