import { useCallback } from 'react'

import api from 'api'

export default async function GetSingleBadge ({ badgeId, setState, setData }) {
  try {
    const data = await api.badges.read(badgeId)
    setData(data)
    setState({ loading: false })
  } catch (err) {
    setState({ loading: false, error: err.message })
  }
}
