import { useState, useMemo } from 'react'

export default function useSearchBadges ({ badges }) {
  const [filteredBadges, setFilteredBadges] = useState(badges)
  const [query, setQuery] = useState('')

  useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase())
    })
    setFilteredBadges(result)
  }, [query, badges])

  return { query, setQuery, filteredBadges }
}
