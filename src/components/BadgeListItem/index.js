import Gravatar from 'components/Gravatar'

export default function BadgeListItem ({ data }) {
  return (
    <>
      <Gravatar key={data.id} emailUser={data.email} className='BadgesListItem__avatar' /> <br />
      <div className='info'>
        <p><span className='fw-bold'>{data.firstName} {data.lastName}</span> </p>
        <p><span>@{data.twitter}</span></p>
        <p><span>{data.jobTitle}</span></p>
      </div>
    </>
  )
}
