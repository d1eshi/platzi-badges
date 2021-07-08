import api from 'api'

export default async function removeSingleBadge ({ setState, badgeId, history }) {
  try {
    setState({ loading: true })

    await api.badges.remove(badgeId)

    setState({ loading: false })

    history.push('/badges')
  } catch (err) {
    setState({ loading: false, error: err.message })
  }
}
