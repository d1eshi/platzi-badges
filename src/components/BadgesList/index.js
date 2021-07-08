import { Link } from 'react-router-dom'

import useSearchBadges from 'hooks/useSearchBadges'
import BadgeListItem from 'components/BadgeListItem'
import './index.css'

export default function BadgesList ({ badges }) {
  const handleChange = e => {
    setQuery(e.target.value)
  }
  const { query, setQuery, filteredBadges } = useSearchBadges({ badges })

  if (filteredBadges.length === 0) {
    return (
      <>
        <div className='form-group'>
          <label>Filter Badges</label>
          <input className='form-control' type='text' value={query} onChange={handleChange} />
        </div>
        <h3>No badges were found</h3>
        <Link to='/badges/new' className='btn btn-primary'>Create new Badge</Link>
      </>
    )
  }

  return (
    <>
      <div className='form-group'>
        <label>Filter Badges</label>
        <input className='form-control' type='text' value={query} onChange={handleChange} />
      </div>

      <ul className='list-unstyled'>
        {filteredBadges.map(dato => {
          return (
            <li key={dato.id}>
              <Link className='text-reset text-decoration-none' to={`/badges/${dato.id}`}>
                <BadgeListItem data={dato} />
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
